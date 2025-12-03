'use strict';

/**
 * Google OAuth middleware for Strapi
 * This middleware validates Google OAuth tokens
 */

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // Skip authentication for public endpoints
    if (ctx.request.url.startsWith('/api/')) {
      const authHeader = ctx.request.header.authorization;
      
      if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.substring(7);
        
        try {
          // Verify Google token
          const response = await fetch(
            `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`
          );
          
          if (response.ok) {
            const tokenInfo = await response.json();
            ctx.state.googleUser = tokenInfo;
          }
        } catch (error) {
          strapi.log.warn('Google token verification failed:', error);
        }
      }
    }
    
    await next();
  };
};

