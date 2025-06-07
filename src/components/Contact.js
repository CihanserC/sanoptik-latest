import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>İletişim</h2>
        <div style={styles.content}>
          <div style={styles.info}>
            <h3 style={styles.heading}>Bizimle İletişime Geçin</h3>

            <div style={styles.item}>
              <span role="img" aria-label="location">📍</span>
              <span style={styles.text}>Adalet, 1586/13. Sk. No:1C, 35530 Bayraklı/İzmir</span>
            </div>

            <div style={styles.item}>
              <span role="img" aria-label="phone">📞</span>
              <span style={styles.text}>+90 534 567 98 08</span>
            </div>

            <div style={styles.item}>
              <span role="img" aria-label="clock">🕒</span>
              <span style={styles.text}>Pazartesi - Cumartesi: 09:00 - 19:00</span>
            </div>

            <div style={styles.item}>
              <a
                href="https://www.instagram.com/san_optikk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                style={styles.instagramLink}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  style={styles.instagramIcon}
                />
                <span>San Optik Instagram</span>
              </a>
            </div>
          </div>

          <div style={styles.mapContainer}>
            <iframe
              title="San Optik Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.812345!2d27.1775051!3d38.4526128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b96343fe815a13%3A0xd44ef6d86a199e22!2sSan%20Optik!5e0!3m2!1str!2str!4v1735848291234!5m2!1str!2str"
              style={styles.map}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#10B981',
    padding: '4rem 1rem',
    color: 'white',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  content: {
    display: 'flex',
    flexDirection: 'row', // Changed to row
    gap: '2rem',
    alignItems: 'start', // Align items at the top
  },
  info: {
    flex: '0 0 40%', // Take up 40% of the space
    paddingRight: '2rem',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.75rem',
    gap: '0.5rem',
  },
  text: {
    fontSize: '1rem',
  },
  instagramLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  instagramIcon: {
    width: '24px',
    height: '24px',
  },
  mapContainer: {
    flex: '0 0 60%', // Take up 60% of the space
    aspectRatio: '1 / 1', // Make it square
    minHeight: '400px',
    maxHeight: '500px',
  },
  map: {
    width: '100%',
    height: '100%',
    border: '0',
    borderRadius: '8px', // Optional: adds rounded corners
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional: adds subtle shadow
  },
};

export default ContactSection;
