import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { BarChart3, Building2, Cog, Briefcase, Globe, DollarSign, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Services = () => {
  const { t, lang } = useLanguage();
  const basePath = lang === 'es' ? '/spanish' : '';

  const services = [
    {
      icon: Cog,
      title: t('services.optimizing_processes'),
      description: t('services.optimizing_description'),
      gradient: 'from-primary to-secondary',
      features: [
        'Process Enhancement',
        'Cost Management',
        'Outstanding Results',
        'Efficiency Optimization'
      ]
    },
    {
      icon: Building2,
      title: t('services.corporate_solutions'),
      description: t('services.corporate_description'),
      gradient: 'from-secondary to-accent',
      features: [
        'Strategic Planning',
        'Business Development',
        'Organizational Design',
        'Change Management'
      ]
    },
    {
      icon: BarChart3,
      title: t('services.corporate_structure'),
      description: t('services.structure_description'),
      gradient: 'from-accent to-primary',
      features: [
        'Financial Structure',
        'Corporate Governance',
        'Risk Management',
        'Compliance Framework'
      ]
    },
    {
      icon: Briefcase,
      title: t('services.top_level_portfolio'),
      description: t('services.portfolio_description'),
      gradient: 'from-primary to-accent',
      features: [
        'Client Relations',
        'Supplier Network',
        'Partnership Development',
        'Strategic Alliances'
      ]
    },
    {
      icon: Globe,
      title: t('services.global_business'),
      description: t('services.global_description'),
      gradient: 'from-secondary to-primary',
      features: [
        'International Expansion',
        'Remote Management',
        'Global Operations',
        'Cross-border Solutions'
      ]
    },
    {
      icon: DollarSign,
      title: t('services.assets_banking'),
      description: t('services.assets_description'),
      gradient: 'from-accent to-secondary',
      features: [
        'Asset Management',
        'Banking Partnerships',
        'Financial Planning',
        'Investment Strategy'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-t from-secondary/10 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto max-w-6xl relative">
          {/* Back to Home Button */}
          <Link 
            to={basePath || '/'} 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t('common.back_to_home')}
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold gradient-text text-center mb-6">
            {t('header.title')}
          </h1>
          <p className="text-xl text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
            {t('header.description')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-8 rounded-2xl border border-border/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold gradient-text mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold gradient-text mb-6">
            {lang === 'es' ? '¿Listo para Transformar su Negocio?' : 'Ready to Transform Your Business?'}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {lang === 'es' 
              ? 'Contáctenos hoy para discutir cómo nuestros servicios pueden ayudar a su organización a alcanzar sus objetivos.'
              : 'Contact us today to discuss how our services can help your organization achieve its goals.'}
          </p>
          <Link 
            to={`${basePath}/contact`}
            className="btn-hero inline-flex items-center"
          >
            {t('footer.get_started')}
          </Link>
        </div>
      </section>
              
      <Footer />
    </div>
  );
};
