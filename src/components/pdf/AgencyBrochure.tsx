import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

const colors = {
  primary: '#2dd4bf',
  primaryDark: '#14b8a6',
  background: '#0a0a0a',
  backgroundLight: '#171717',
  text: '#ffffff',
  textMuted: '#a3a3a3',
  border: '#262626',
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background,
    padding: 40,
    fontFamily: 'Helvetica',
  },
  // Cover page
  coverContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: 'rgba(45, 212, 191, 0.1)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 24,
  },
  badgeText: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: 'bold',
  },
  coverTitle: {
    color: colors.text,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  coverGradientText: {
    color: colors.primary,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  coverSubtitle: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 40,
    maxWidth: 400,
    lineHeight: 1.6,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 40,
    marginTop: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    color: colors.textMuted,
    fontSize: 10,
    marginTop: 4,
  },
  // Section styles
  sectionTitle: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  pageTitle: {
    color: colors.text,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  paragraph: {
    color: colors.textMuted,
    fontSize: 11,
    lineHeight: 1.8,
    marginBottom: 16,
  },
  // Cards
  card: {
    backgroundColor: colors.backgroundLight,
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    color: colors.textMuted,
    fontSize: 10,
    lineHeight: 1.6,
  },
  // Grid
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  gridItem: {
    width: '48%',
    backgroundColor: colors.backgroundLight,
    borderRadius: 6,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  // List items
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  listBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
    marginRight: 12,
  },
  listText: {
    color: colors.textMuted,
    fontSize: 11,
  },
  // Footer
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: colors.textMuted,
    fontSize: 8,
  },
  footerBrand: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: 'bold',
  },
  // Contact page
  contactCard: {
    backgroundColor: colors.backgroundLight,
    borderRadius: 12,
    padding: 30,
    borderWidth: 1,
    borderColor: colors.primary,
    marginBottom: 24,
  },
  contactTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  contactSubtitle: {
    color: colors.textMuted,
    fontSize: 11,
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: 'flex-start',
  },
  ctaText: {
    color: colors.background,
    fontSize: 12,
    fontWeight: 'bold',
  },
  contactInfo: {
    marginTop: 24,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  contactLabel: {
    color: colors.textMuted,
    fontSize: 10,
    width: 60,
  },
  contactValue: {
    color: colors.text,
    fontSize: 10,
  },
  // Expertise grid
  expertiseGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  expertiseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    marginBottom: 8,
  },
  checkmark: {
    color: colors.primary,
    fontSize: 12,
    marginRight: 8,
  },
  expertiseText: {
    color: colors.text,
    fontSize: 10,
  },
  // Services
  serviceCard: {
    backgroundColor: colors.backgroundLight,
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  serviceTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  serviceDescription: {
    color: colors.textMuted,
    fontSize: 10,
    marginBottom: 12,
    lineHeight: 1.6,
  },
  featureList: {
    marginTop: 8,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  featureBullet: {
    color: colors.primary,
    fontSize: 10,
    marginRight: 8,
  },
  featureText: {
    color: colors.textMuted,
    fontSize: 9,
  },
  // Clients
  clientGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  clientCard: {
    width: '48%',
    backgroundColor: colors.backgroundLight,
    borderRadius: 6,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  clientName: {
    color: colors.text,
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  clientCategory: {
    color: colors.primary,
    fontSize: 9,
  },
  // Target audience
  audienceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 16,
  },
  audienceTag: {
    backgroundColor: 'rgba(45, 212, 191, 0.1)',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  audienceText: {
    color: colors.primary,
    fontSize: 9,
  },
  // Why us
  diffCard: {
    backgroundColor: colors.backgroundLight,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  diffTitle: {
    color: colors.text,
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  diffDescription: {
    color: colors.textMuted,
    fontSize: 9,
    lineHeight: 1.6,
  },
  // Vision
  visionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 30,
  },
  visionCard: {
    width: '48%',
    backgroundColor: colors.backgroundLight,
    borderRadius: 8,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  visionTitle: {
    color: colors.text,
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  visionDescription: {
    color: colors.textMuted,
    fontSize: 9,
    lineHeight: 1.5,
  },
});

const Footer = ({ pageNumber }: { pageNumber: number }) => (
  <View style={styles.footer}>
    <Text style={styles.footerBrand}>Beyond Goofy</Text>
    <Text style={styles.footerText}>Page {pageNumber}</Text>
  </View>
);

const AgencyBrochure = () => (
  <Document>
    {/* Cover Page */}
    <Page size="A4" style={styles.page}>
      <View style={styles.coverContainer}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>#1 Healthcare Performance Marketing Agency in Bangalore</Text>
        </View>
        <Text style={styles.coverTitle}>Scaling Healthcare Brands</Text>
        <Text style={styles.coverGradientText}>Where Most Agencies Get Banned</Text>
        <Text style={styles.coverSubtitle}>
          Performance marketing for healthcare, D2C, protein & fitness brands. We do revenue & growth by ethically bypassing ad restrictions on Meta & Google.
        </Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>₹1.5+ Cr</Text>
            <Text style={styles.statLabel}>Monthly Ad Spend</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>₹5 Cr+</Text>
            <Text style={styles.statLabel}>Monthly Revenue Generated</Text>
          </View>
        </View>
      </View>
      <Footer pageNumber={1} />
    </Page>

    {/* About Page */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>About Us</Text>
      <Text style={styles.pageTitle}>Built Different for Healthcare</Text>
      <Text style={styles.paragraph}>
        At Beyond Goofy, we specialize in healthcare advertising. This means we understand the language of healthcare, medical keywords, platform policies, and the algorithms that scan and restrict ads in real-time.
      </Text>
      <Text style={styles.paragraph}>
        Healthcare advertising is a different beast. From ad disapprovals to account bans, most agencies shy away from this complexity. We built our entire business around mastering it.
      </Text>
      
      <View style={styles.grid}>
        <View style={styles.gridItem}>
          <Text style={styles.cardTitle}>Keyword Sensitivity</Text>
          <Text style={styles.cardDescription}>Deep understanding of restricted healthcare terminology</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.cardTitle}>Policy Mastery</Text>
          <Text style={styles.cardDescription}>Navigate Meta & Google healthcare policies</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.cardTitle}>Algorithm Bypassing</Text>
          <Text style={styles.cardDescription}>Ethical techniques to bypass AI filters</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.cardTitle}>Account Protection</Text>
          <Text style={styles.cardDescription}>Structuring to prevent bans & restrictions</Text>
        </View>
      </View>
      <Footer pageNumber={2} />
    </Page>

    {/* Expertise Page */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Our Expertise</Text>
      <Text style={styles.pageTitle}>Restricted Categories We've Scaled</Text>
      <Text style={styles.paragraph}>
        We've successfully run ads for the most restricted healthcare categories where most agencies fail or get banned.
      </Text>
      
      <View style={styles.expertiseGrid}>
        {[
          'MTP / Abortion Pills',
          'Weight Loss & Anti-Obesity',
          'Gynaecology & Women\'s Health',
          'Mental Health & Therapy',
          'PCOS / PCOD Treatment',
          'IVF & Fertility',
          'Egg Freezing',
          'Sexual Wellness',
          'Chronic Disease Management',
          'Nutraceuticals & Supplements',
        ].map((item, index) => (
          <View key={index} style={styles.expertiseItem}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.expertiseText}>{item}</Text>
          </View>
        ))}
      </View>
      
      <View style={[styles.card, { marginTop: 24 }]}>
        <Text style={styles.cardDescription}>
          Years of experience navigating the healthcare advertising landscape. We know what works, what gets flagged, and how to scale compliantly.
        </Text>
      </View>
      <Footer pageNumber={3} />
    </Page>

    {/* Services Page */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>What We Do</Text>
      <Text style={styles.pageTitle}>Our Services</Text>
      <Text style={styles.paragraph}>
        We focus on what we're best at. No fluff, no distractions, just results.
      </Text>

      <View style={styles.serviceCard}>
        <Text style={styles.serviceTitle}>Performance Marketing</Text>
        <Text style={styles.serviceDescription}>
          Scale your healthcare brand on Meta & Google Ads with compliance-first strategies designed to maximize ROI while staying within platform guidelines.
        </Text>
        <View style={styles.featureList}>
          {['Meta Ads (Facebook & Instagram)', 'Google Ads (Search, Display, YouTube)', 'Healthcare-compliant creative strategy', 'Landing page optimization'].map((feature, i) => (
            <View key={i} style={styles.featureItem}>
              <Text style={styles.featureBullet}>→</Text>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.serviceCard}>
        <Text style={styles.serviceTitle}>Retention Marketing</Text>
        <Text style={styles.serviceDescription}>
          Maximize customer lifetime value through strategic CRO, funnel optimization, and retention systems that keep customers coming back.
        </Text>
        <View style={styles.featureList}>
          {['Conversion Rate Optimization', 'Funnel design & optimization', 'Email & WhatsApp automation', 'LTV growth strategies'].map((feature, i) => (
            <View key={i} style={styles.featureItem}>
              <Text style={styles.featureBullet}>→</Text>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
      </View>
      <Footer pageNumber={4} />
    </Page>

    {/* Clients Page */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Portfolio</Text>
      <Text style={styles.pageTitle}>Brands We've Scaled</Text>
      
      <View style={styles.clientGrid}>
        {[
          { name: 'Proactive For Her', category: 'Digital Health Platform for Women' },
          { name: 'Elevate Now', category: 'Weight Loss & Wellness' },
          { name: 'Food Darzee', category: 'Healthy Meal Plans' },
          { name: 'Aroleap', category: 'Smart Fitness Equipment' },
          { name: 'Ferra', category: 'Fitness & Training' },
        ].map((client, index) => (
          <View key={index} style={styles.clientCard}>
            <Text style={styles.clientName}>{client.name}</Text>
            <Text style={styles.clientCategory}>{client.category}</Text>
          </View>
        ))}
      </View>

      <Text style={[styles.sectionTitle, { marginTop: 16 }]}>Who We Work With</Text>
      <View style={styles.audienceGrid}>
        {[
          'Healthcare & MedTech',
          'D2C Brands',
          'Protein & Supplements',
          'Fitness & Wellness',
          'Femtech',
          'Mental Health Platforms',
        ].map((audience, index) => (
          <View key={index} style={styles.audienceTag}>
            <Text style={styles.audienceText}>{audience}</Text>
          </View>
        ))}
      </View>
      <Footer pageNumber={5} />
    </Page>

    {/* Why Different Page */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Why Choose Us</Text>
      <Text style={styles.pageTitle}>What Sets Us Apart</Text>

      {[
        {
          title: 'Specialized, Not Generalized',
          description: 'We only work with healthcare, D2C, protein, and fitness brands. This focus means deeper expertise and better results for your specific industry.',
        },
        {
          title: 'Policy Experts',
          description: 'We understand Meta and Google healthcare policies inside out. No more disapproved ads or account suspensions.',
        },
        {
          title: 'Revenue-Focused',
          description: 'We don\'t chase vanity metrics. Our KPIs are your revenue, ROAS, and sustainable growth.',
        },
        {
          title: 'Founder-Led',
          description: 'Direct access to senior strategists who understand your business, not junior account managers learning on your dime.',
        },
      ].map((diff, index) => (
        <View key={index} style={styles.diffCard}>
          <Text style={styles.diffTitle}>{diff.title}</Text>
          <Text style={styles.diffDescription}>{diff.description}</Text>
        </View>
      ))}
      <Footer pageNumber={6} />
    </Page>

    {/* Vision & Contact Page */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Our Vision</Text>
      <Text style={styles.pageTitle}>Where We're Heading</Text>
      
      <View style={styles.visionGrid}>
        {[
          { title: '₹10 Cr Monthly Revenue', description: 'For our clients combined' },
          { title: 'Top 3 Agency', description: 'In healthcare performance marketing' },
          { title: 'Expand Globally', description: 'Serving US, UK & UAE markets' },
          { title: 'Build AI Tools', description: 'Proprietary healthcare ad optimization' },
        ].map((vision, index) => (
          <View key={index} style={styles.visionCard}>
            <Text style={styles.visionTitle}>{vision.title}</Text>
            <Text style={styles.visionDescription}>{vision.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.contactCard}>
        <Text style={styles.contactTitle}>Ready to Scale Your Healthcare Brand?</Text>
        <Text style={styles.contactSubtitle}>
          Book a free strategy call to discuss how we can help you grow compliantly on Meta & Google.
        </Text>
        <Link src="https://calendly.com/santhosh-chidambaram/performance-marketing-discovery-call" style={styles.ctaButton}>
          <Text style={styles.ctaText}>Book a Free Strategy Call</Text>
        </Link>
        
        <View style={styles.contactInfo}>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Email</Text>
            <Text style={styles.contactValue}>santhosh@beyondgoofy.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Phone</Text>
            <Text style={styles.contactValue}>+91 95661 54455</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Location</Text>
            <Text style={styles.contactValue}>Bangalore, India</Text>
          </View>
        </View>
      </View>
      <Footer pageNumber={7} />
    </Page>
  </Document>
);

export default AgencyBrochure;
