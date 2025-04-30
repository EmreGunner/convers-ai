import { useState } from 'react'
import { ArrowRight, Send, Sparkles, AlertCircle } from 'lucide-react'

function CallToAction() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setError('') // Clear any previous errors
  }

  const validateForm = () => {
    if (!formData.email || !formData.email.includes('@')) {
      setError('Please enter a valid email address')
      return false
    }
    if (!formData.name.trim()) {
      setError('Please enter your name')
      return false
    }
    return true
  }

  const nextStep = () => {
    if (step < 3) {
      // For email field, validate before proceeding
      if (step === 1 && !formData.email.includes('@')) {
        setError('Please enter a valid email address')
        return
      }
      setStep(step + 1)
      setError('')
    } else {
      if (validateForm()) {
        handleSubmit()
      }
    }
  }

  const handleSubmit = async () => {
    if (isSubmitting) return
    
    try {
      setIsSubmitting(true)
      setError('')
      
      // Form structure required by Formspree
      const formData1 = new FormData()
      formData1.append('name', formData.name)
      formData1.append('email', formData.email)
      formData1.append('company', formData.company)
      formData1.append('message', formData.message)
      
      const response = await fetch('https://formspree.io/f/mldbdyrk', {
        method: 'POST',
        body: formData1,
        headers: {
          'Accept': 'application/json'
        }
      })
  
      const responseData = await response.json()
      
      if (response.ok) {
        console.log('Form submitted successfully')
        setSubmitted(true)
      } else {
        console.error('Form submission failed', responseData)
        setError(responseData.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      nextStep()
    }
  }

  const questions = [
    {
      id: 'name',
      question: 'Whats your name?',
      placeholder: 'Type your name...',
      type: 'text'
    },
    {
      id: 'email',
      question: 'Whats your email address?',
      placeholder: 'name@company.com',
      type: 'email'
    },
    {
      id: 'company',
      question: 'Where do you work?',
      placeholder: 'Your company or organization',
      type: 'text'
    },
    {
      id: 'message',
      question: 'Tell us about your lead generation needs',
      placeholder: 'I need help with...',
      type: 'textarea'
    }
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background gradient - changed to emerald */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900" />
      
      {/* Subtle decorative elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay for consistency with other sections */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {!submitted ? (
            <div className="glass-card p-8 md:p-12 shadow-lg relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to See If It Fits?
              </h2>
              
              <div className="mb-12">
                <div className="flex gap-2 mb-6">
                  {questions.map((_, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div 
                        className={`h-1.5 w-full rounded-full mb-1 transition-all duration-500 ${
                          i < step ? 'bg-emerald-400' : 
                          i === step ? 'bg-white' : 
                          'bg-white/20'
                        }`}
                      />
                    </div>
                  ))}
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-6">
                  {questions[step].question}
                </h3>
                
                <div className="relative">
                  {questions[step].type === 'textarea' ? (
                    <textarea
                      className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all resize-none"
                      placeholder={questions[step].placeholder}
                      rows={4}
                      value={formData[questions[step].id as keyof typeof formData]}
                      onChange={(e) => updateField(questions[step].id, e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                  ) : (
                    <input
                      type={questions[step].type}
                      className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                      placeholder={questions[step].placeholder}
                      value={formData[questions[step].id as keyof typeof formData]}
                      onChange={(e) => updateField(questions[step].id, e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                  )}
                  
                  <button
                    className={`absolute right-3 top-1/2 -translate-y-1/2 bg-white text-emerald-700 rounded-full p-2 hover:bg-emerald-50 transition-all duration-200 group ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={nextStep}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 border-2 border-emerald-700 border-t-transparent rounded-full animate-spin"></div>
                    ) : step === questions.length - 1 ? (
                      <Send size={18} />
                    ) : (
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>
                </div>
                
                {error && (
                  <div className="mt-4 flex items-center text-red-400 text-sm">
                    <AlertCircle size={16} className="mr-2" />
                    {error}
                  </div>
                )}
                
                <p className="mt-4 text-sm text-white/70">
                  {step === questions.length - 1 ? 
                    'Press Enter to submit' : 
                    'Press Enter to continue'}
                </p>
              </div>
            </div>
          ) : (
            <div className="glass-card p-12 shadow-lg text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Sparkles className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Thanks, {formData.name}!
              </h2>
              <p className="text-white/80 mb-8">
                We'll get back to you shortly to discuss how we can help with your lead generation needs.
              </p>
              <button 
                onClick={() => {
                  setStep(0)
                  setSubmitted(false)
                  setFormData({name: '', email: '', company: '', message: ''})
                  setError('')
                }}
                className="btn-primary"
              >
                Send another message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CallToAction