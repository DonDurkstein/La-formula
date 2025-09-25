import { BarChart3, Building2, Cog, Briefcase, Globe, DollarSign } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Cog,
      title: t('services.optimizing_processes').split(' ')[0],
      subtitle: t('services.optimizing_processes').split(' ').slice(1).join(' '),
      description: t('services.optimizing_description'),
      gradient: 'from-primary to-secondary'
    },
    {
      icon: Building2,
      title: t('services.corporate_solutions').split(' ')[0],
      subtitle: t('services.corporate_solutions').split(' ').slice(1).join(' '),
      description: t('services.corporate_description'),
      gradient: 'from-secondary to-accent'
    },
    {
      icon: BarChart3,
      title: t('services.corporate_structure').split(' ')[0],
      subtitle: t('services.corporate_structure').split(' ').slice(1).join(' '),
      description: t('services.structure_description'),
      gradient: 'from-accent to-primary'
    },
    {
      icon: Briefcase,
      title: 'Top-Level',
      subtitle: t('services.top_level_portfolio').split(' ').slice(1).join(' '),
      description: t('services.portfolio_description'),
      gradient: 'from-primary to-accent'
    },
    {
      icon: Globe,
      title: t('services.global_business').split(' ')[0],
      subtitle: t('services.global_business').split(' ').slice(1).join(' '),
      description: t('services.global_description'),
      gradient: 'from-secondary to-primary'
    },
    {
      icon: DollarSign,
      title: t('services.assets_banking').split(' ')[0],
      subtitle: t('services.assets_banking').split(' ').slice(1).join(' '),
      description: t('services.assets_description'),
      gradient: 'from-accent to-secondary'
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('header.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('header.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="service-card group relative p-6 rounded-2xl bg-card border border-border/20 hover:border-primary/50 transition-all duration-300 overflow-hidden"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fade-in-up 0.6s ease-out forwards'
                }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all duration-500`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <h4 className="text-xl font-semibold gradient-text">
                    {service.subtitle}
                  </h4>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};