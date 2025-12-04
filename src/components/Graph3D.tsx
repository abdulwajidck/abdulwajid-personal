'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

interface NodeData {
  position: [number, number, number]
  size: number
}

interface EdgeData {
  from: number
  to: number
  baseOpacity: number
}

const NODE_COUNT_DESKTOP = 30
const NODE_COUNT_MOBILE = 15
const CONNECTION_DISTANCE = 2.5
const ACCENT_COLOR = '#c9ff2f'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768
    }
    return false
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

function GraphNodes({ 
  nodes, 
  edges, 
  nodeProgress, 
  edgeProgress 
}: { 
  nodes: NodeData[]
  edges: EdgeData[]
  nodeProgress: number[]
  edgeProgress: number[]
}) {
  const nodesRef = useRef<THREE.InstancedMesh>(null)
  const edgesRef = useRef<THREE.BufferGeometry>(null)
  const edgesMaterialRef = useRef<THREE.LineBasicMaterial>(null)

  // Create instanced geometry for nodes
  const sphereGeometry = useMemo(() => new THREE.SphereGeometry(0.05, 16, 16), [])

  useFrame((state) => {
    if (!nodesRef.current) return

    const time = state.clock.getElapsedTime()

    // Update node positions and scales
    nodes.forEach((node, i) => {
      if (!nodesRef.current) return
      
      const matrix = new THREE.Matrix4()
      const progress = nodeProgress[i] || 0
      const scale = 0.3 + progress * 0.7
      const yOffset = Math.sin(time * 0.5 + i) * 0.1
      
      matrix.makeScale(scale, scale, scale)
      matrix.setPosition(
        node.position[0],
        node.position[1] + yOffset,
        node.position[2]
      )
      
      nodesRef.current.setMatrixAt(i, matrix)
    })
    
    nodesRef.current.instanceMatrix.needsUpdate = true
  })

  // Update edges
  useFrame(() => {
    if (!edgesRef.current || !edgesMaterialRef.current) return

    const positions: number[] = []
    const colors: number[] = []

    edges.forEach((edge, i) => {
      const fromNode = nodes[edge.from]
      const toNode = nodes[edge.to]
      
      if (!fromNode || !toNode) return

      positions.push(
        fromNode.position[0],
        fromNode.position[1],
        fromNode.position[2],
        toNode.position[0],
        toNode.position[1],
        toNode.position[2]
      )
      
      const progress = edgeProgress[i] || 0
      const opacity = edge.baseOpacity * progress * 0.3
      // Convert hex color to RGB and apply opacity to color intensity
      const r = (201 / 255) * opacity
      const g = (255 / 255) * opacity
      const b = (47 / 255) * opacity
      colors.push(r, g, b, r, g, b)
    })

    if (positions.length > 0) {
      edgesRef.current.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(positions, 3)
      )
      edgesRef.current.setAttribute(
        'color',
        new THREE.Float32BufferAttribute(colors, 3)
      )
      edgesRef.current.computeBoundingSphere()
    }
  })

  return (
    <>
      {/* Nodes */}
      <instancedMesh
        ref={nodesRef}
        args={[sphereGeometry, undefined, nodes.length]}
      >
        <meshBasicMaterial
          color={ACCENT_COLOR}
          transparent
          opacity={0.6}
        />
      </instancedMesh>

      {/* Edges */}
      <lineSegments>
        <bufferGeometry ref={edgesRef} />
        <lineBasicMaterial
          ref={edgesMaterialRef}
          transparent
          vertexColors={true}
        />
      </lineSegments>
    </>
  )
}

function GraphScene({ nodeCount }: { nodeCount: number }) {
  const nodes = useMemo(() => {
    const nodeArray: NodeData[] = []
    
    for (let i = 0; i < nodeCount; i++) {
      nodeArray.push({
        position: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 8,
        ],
        size: 0.1 + Math.random() * 0.1,
      })
    }
    
    return nodeArray
  }, [nodeCount])

  const edges = useMemo(() => {
    const edgeArray: EdgeData[] = []
    
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].position[0] - nodes[j].position[0]
        const dy = nodes[i].position[1] - nodes[j].position[1]
        const dz = nodes[i].position[2] - nodes[j].position[2]
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
        
        if (distance < CONNECTION_DISTANCE) {
          edgeArray.push({
            from: i,
            to: j,
            baseOpacity: 1 - distance / CONNECTION_DISTANCE,
          })
        }
      }
    }
    
    return edgeArray
  }, [nodes])

  const [nodeProgress, setNodeProgress] = useState<number[]>(new Array(nodes.length).fill(0))
  const [edgeProgress, setEdgeProgress] = useState<number[]>(new Array(edges.length).fill(0))

  // Animate nodes appearing and growing
  useEffect(() => {
    const startTime = Date.now()
    const nodeDelays = nodes.map((_, i) => i * 50)
    const edgeDelays = edges.map((_, i) => 500 + i * 30)
    let animationFrameId: number

    const animate = () => {
      const elapsed = Date.now() - startTime

      // Update node progress
      const newNodeProgress = nodes.map((_, i) => {
        const delay = nodeDelays[i]
        if (elapsed < delay) return 0
        const progress = Math.min((elapsed - delay) / 2000, 1)
        return progress
      })
      setNodeProgress(newNodeProgress)

      // Update edge progress
      const newEdgeProgress = edges.map((_, i) => {
        const delay = edgeDelays[i]
        if (elapsed < delay) return 0
        const progress = Math.min((elapsed - delay) / 1500, 1)
        return progress
      })
      setEdgeProgress(newEdgeProgress)

      const maxDelay = Math.max(...nodeDelays, ...edgeDelays) + 2000
      if (elapsed < maxDelay) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [nodes, edges])

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <GraphNodes 
        nodes={nodes} 
        edges={edges} 
        nodeProgress={nodeProgress}
        edgeProgress={edgeProgress}
      />
    </>
  )
}

export function Graph3D() {
  const [mounted, setMounted] = useState(false)
  const isMobile = useIsMobile()
  const nodeCount = isMobile ? NODE_COUNT_MOBILE : NODE_COUNT_DESKTOP

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="graph3d-container" />
  }

  return (
    <div className="graph3d-container">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ 
          alpha: true, 
          antialias: !isMobile,
          powerPreference: 'high-performance'
        }}
        style={{ background: 'transparent' }}
        dpr={isMobile ? 1 : 2}
      >
        <GraphScene nodeCount={nodeCount} />
        {!isMobile && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        )}
      </Canvas>
    </div>
  )
}

