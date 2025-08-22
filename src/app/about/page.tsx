import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About InsuraCalc.com
          </h1>
          <p className="text-xl text-gray-600">
            Your trusted partner for insurance cost estimates worldwide
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              InsuraCalc.com is dedicated to providing accurate, instant insurance cost estimates 
              for individuals and businesses across multiple countries and insurance types. 
              We believe everyone deserves transparent, accessible information about their 
              insurance options.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Instant calculations for 6 insurance types: Car, Home, Health, Travel, Life, and Business</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Coverage for 5 countries: USA, England, Europe, Australia, and Russia</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Multi-language support in English, French, German, Russian, and Swiss German</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Advanced algorithms that consider age, value, location, and coverage factors</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Responsive design that works on all devices</span>
              </li>
            </ul>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 mb-4">
              Our insurance calculator uses sophisticated algorithms based on real market data 
              and industry standards. We consider multiple factors including:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Age and demographic factors</li>
              <li>• Property or asset value</li>
              <li>• Geographic location and risk factors</li>
              <li>• Coverage level and policy type</li>
              <li>• Country-specific regulations and market conditions</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
            <p className="text-gray-600">
              The estimates provided by InsuraCalc.com are for informational purposes only. 
              Actual insurance costs may vary based on specific circumstances, provider policies, 
              and current market conditions. We recommend consulting with licensed insurance 
              professionals for accurate quotes and policy recommendations.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
