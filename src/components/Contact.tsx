import styles from "./Contact.module.css";

interface ContactProps {
  settings?: {
    email?: string;
    phone?: string;
    linkedinUrl?: string;
    instagramUrl?: string;
    stakqueUrl?: string;
  } | null;
}

export function Contact({ settings }: ContactProps) {
  const email = settings?.email || "hello@abdulwajidck.com";
  const phone = settings?.phone || "+91 98765 43210";
  const linkedinUrl =
    settings?.linkedinUrl || "https://linkedin.com/in/abdulwajidck";
  const instagramUrl =
    settings?.instagramUrl || "https://instagram.com/wajistakque";
  const stakqueUrl = settings?.stakqueUrl || "https://stakque.com";

  return (
    <section className="section" id="contact">
      <div className="section-header">
        <div>
          <div className="section-label">04 / Get In Touch</div>
          <h2>
            Let's build something <em>remarkable</em> together
          </h2>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.intro}>
            Whether you're looking to transform your marketing strategy, scale
            your education business, or explore the E3 framework—I'd love to
            hear from you.
          </p>

          <div className={styles.contactMethods}>
            <div className={styles.method}>
              <span className={styles.methodLabel}>Email</span>
              <a href={`mailto:${email}`} className={styles.methodValue}>
                {email}
              </a>
            </div>

            <div className={styles.method}>
              <span className={styles.methodLabel}>Phone</span>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className={styles.methodValue}
              >
                {phone}
              </a>
            </div>
          </div>

          <div className={styles.social}>
            <span className={styles.socialLabel}>Connect with me</span>
            <div className={styles.socialLinks}>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                LinkedIn
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Instagram
              </a>
              <a
                href={stakqueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Stakque
              </a>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaCard}>
            <h3>Ready to scale?</h3>
            <p>
              Book a free 30-minute strategy call to discuss your growth
              challenges.
            </p>
            <a
              href={`mailto:${email}?subject=Strategy Call Request`}
              className="btn btn-primary"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
