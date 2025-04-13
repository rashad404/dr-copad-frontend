import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-indigo-100">
        <div className="absolute inset-0">
          <svg className="absolute right-0 top-0 h-full w-48 translate-x-1/2 transform text-white" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
        
        <div className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-7">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:leading-tight">
                  Get AI-Powered Medical Help
                  <span className="block text-indigo-600">Anytime. Anywhere.</span>
                </h1>
                <p className="mt-6 text-xl text-gray-600 max-w-3xl">
                  Dr. Copad is your personal AI doctor. Instantly chat about symptoms, get medical guidance, and keep your health records organized — securely.
                </p>
                
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/register"
                    className="flex items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Get Started Free
                  </Link>
                  <Link
                    to="/login"
                    className="flex items-center justify-center rounded-md border border-indigo-600 bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Login
                  </Link>
                </div>
                
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`inline-block h-8 w-8 rounded-full ring-2 ring-white bg-indigo-${i*100 + 100}`}>
                        <span className="sr-only">User avatar</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    Join over <span className="text-indigo-600 font-semibold">5,000+</span> users
                  </div>
                </div>
              </div>
              
              <div className="mt-16 sm:mt-24 lg:col-span-5 lg:mt-0">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-indigo-700 px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                      <div className="h-3 w-3 bg-yellow-300 rounded-full mr-2"></div>
                      <div className="h-3 w-3 bg-green-400 rounded-full"></div>
                      <div className="ml-auto text-white font-medium">Dr. Copad Chat</div>
                    </div>
                  </div>
                  <div className="px-6 py-8 bg-gray-50 h-80 flex flex-col">
                    <div className="bg-white rounded-lg p-4 shadow-sm mb-4 ml-auto max-w-[80%]">
                      <p className="text-sm text-gray-700">I've been having headaches and fatigue for the past week.</p>
                      <p className="text-xs text-gray-400 mt-1 text-right">You • 10:23 AM</p>
                    </div>
                    <div className="bg-indigo-100 rounded-lg p-4 shadow-sm mb-4 mr-auto max-w-[80%]">
                      <p className="text-sm text-gray-700">I understand you're experiencing headaches and fatigue. Let me ask a few questions to better understand your symptoms.</p>
                      <p className="text-xs text-gray-400 mt-1">Dr. Copad AI • 10:24 AM</p>
                    </div>
                    <div className="bg-indigo-100 rounded-lg p-4 shadow-sm mb-4 mr-auto max-w-[80%]">
                      <p className="text-sm text-gray-700">1. How would you describe the headache pain (dull, sharp, throbbing)?</p>
                      <p className="text-sm text-gray-700 mt-2">2. Have you noticed any triggers for your symptoms?</p>
                      <p className="text-xs text-gray-400 mt-1">Dr. Copad AI • 10:24 AM</p>
                    </div>
                    <div className="mt-auto flex gap-2">
                      <input type="text" placeholder="Type your message..." className="flex-grow rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                      <button className="rounded-full bg-indigo-600 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything you need for your health
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              AI-powered medical assistance that's accessible, reliable, and designed for your needs.
            </p>
          </div>
          
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Feature 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                }
                title="Chat with AI Doctor"
                description="Describe your symptoms and get AI-generated guidance instantly — 24/7. No waiting rooms, no appointments needed."
              />
              <Feature 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                }
                title="Upload Medical Files"
                description="Analyze lab results, images, and medical history with AI assistance. Get insights and explanations in plain language."
              />
              <Feature 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                }
                title="Track Appointments"
                description="Keep your health journey organized with history, summaries, and AI notes. Access your previous consultations anytime."
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center">
            Trusted by users worldwide
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Testimonial 
              quote="Dr. Copad helped me understand my lab results when I couldn't get an appointment with my doctor. It explained everything in simple terms."
              author="Sarah K."
              role="Patient"
            />
            <Testimonial 
              quote="As someone living in a rural area, having 24/7 access to medical guidance has been life-changing. It's like having a doctor in my pocket."
              author="Michael T."
              role="Patient"
            />
            <Testimonial 
              quote="The symptom checker is impressively accurate. It helped me identify a condition my regular doctor had missed for months."
              author="Jessica W."
              role="Healthcare Worker"
            />
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  <span className="block">Ready to take control</span>
                  <span className="block text-indigo-600">of your health?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-600">
                  Get started with Dr. Copad today and experience the future of healthcare. No subscription required.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link to="/register" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10">
                    Get Started Free
                  </Link>
                  <Link to="/login" className="flex items-center justify-center rounded-md border border-indigo-600 bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 md:py-4 md:px-10">
                    Login
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative -mt-6 md:mt-0 h-full min-h-64">
              <div className="absolute inset-0 flex items-center justify-center bg-indigo-700 lg:relative h-full">
                <svg className="h-full w-full text-indigo-800 opacity-25" fill="currentColor" viewBox="0 0 600 600" aria-hidden="true">
                  <path d="M600 300c0 165.69-134.31 300-300 300S0 465.69 0 300 134.31 0 300 0s300 134.31 300 300zM300 50c-138.07 0-250 111.93-250 250s111.93 250 250 250 250-111.93 250-250S438.07 50 300 50zm0 50c110.46 0 200 89.54 200 200s-89.54 200-200 200-200-89.54-200-200S189.54 100 300 100z" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-48 w-48 rounded-full bg-indigo-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Privacy</span>
                <span className="text-sm font-medium text-gray-600 hover:text-gray-900">Privacy Policy</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Terms</span>
                <span className="text-sm font-medium text-gray-600 hover:text-gray-900">Terms of Service</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Contact</span>
                <span className="text-sm font-medium text-gray-600 hover:text-gray-900">Contact</span>
              </a>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-center text-sm text-gray-400 md:text-right">
                <span className="inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  HIPAA-compliant. Private. Your data is yours.
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Feature Component
function Feature({ icon, title, description }) {
  return (
    <div className="relative">
      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
        {icon}
      </div>
      <p className="ml-16 text-lg font-medium text-gray-900">{title}</p>
      <p className="mt-2 ml-16 text-base text-gray-500">{description}</p>
    </div>
  );
}

// Testimonial Component
function Testimonial({ quote, author, role }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="px-6 py-8 flex-grow">
        <div className="relative text-lg text-gray-600">
          <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="relative pl-10">{quote}</p>
        </div>
      </div>
      <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">{author.charAt(0)}</span>
            </div>
          </div>
          <div className="ml-3">
            <p className="text-base font-medium text-gray-900">{author}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}