import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative glass-card border-t border-border/20 py-16 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src='https://www.laformulacg.net/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=128&q=75' alt="La Formula Capital Group" className="h-20 w-max" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t('footer.tagline') || 'Enhancing business efficiency and competitiveness with specialized B2B solutions. La Formula Capital Group - Your success is our formula.'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300">
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold gradient-text">{t('footer.services') || 'Services'}</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.process_optimization') || 'Process Optimization'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.corporate_solutions') || 'Corporate Solutions'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.corporate_structure') || 'Corporate Structure'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.portfolio_management') || 'Portfolio Management'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.global_centralization') || 'Global Centralization'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.asset_banking') || 'Asset Banking'}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold gradient-text">{t('footer.company') || 'Company'}</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.about_us') || 'About Us'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.our_team') || 'Our Team'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.case_studies') || 'Case Studies'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.careers') || 'Careers'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.news') || 'News'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.contact_link') || 'Contact'}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold gradient-text">{t('footer.contact') || 'Contact'}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('footer.email') || 'Email'}</p>
                  <p className="text-foreground">{t('footer.email_address') || 'info@laformulacg.net'}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('footer.phone') || 'Phone'}</p>
                  <p className="text-foreground">{t('footer.phone_number') || '+1 (555) 123-4567'}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('footer.office') || 'Office'}</p>
                  <p className="text-foreground">{t('footer.office_location') || 'Global Business Center'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/20 text-center">
          <p className="text-muted-foreground">
            © 2024 La Formula Capital Group. {t('footer.all_rights_reserved') || 'All rights reserved.'} | 
            <a href="#" className="ml-1 hover:text-primary transition-colors">{t('footer.privacy_policy') || 'Privacy Policy'}</a> | 
            <a href="#" className="ml-1 hover:text-primary transition-colors">{t('footer.terms_of_service') || 'Terms of Service'}</a>
          </p>
        </div>
      </div>
    </footer>
  );
};