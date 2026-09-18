'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import SectionHeading from '@/components/shared/SectionHeading';
import { siteApi } from '@/lib/api';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    website_check: '', // Honeypot field for spam prevention
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await siteApi.submitContact(formData);
      if (res.status === 'success') {
        setStatus('success');
        setFeedbackMessage(res.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          website_check: '',
        });
      } else {
        setStatus('error');
        setFeedbackMessage(res.message);
      }
    } catch {
      setStatus('error');
      setFeedbackMessage('Something went wrong submitting your message. Please reach out to us via phone or email directly.');
    }
  };

  return (
    <div>
      <PageHeader
        badge="Connect With Us"
        title="Contact & Campus Location"
        subtitle="We invite patrons, well-wishers, and visitors to connect with our administrative team or visit our Lucknow campus."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Official Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <SectionHeading
                align="left"
                badge="Administration"
                title="Office of the Sadan"
                subtitle="Reach out for visits, meal sponsorships, child welfare information, or voluntary involvement."
                className="mb-6"
              />

              <div className="space-y-6 text-sm text-charcoal-700">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-50 border border-gold-200">
                  <div className="p-3 rounded-xl bg-white border border-gold-300 text-saffron shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-charcoal-900 mb-1">
                      Campus Address
                    </h4>
                    <p className="leading-relaxed">
                      Shrimad Dayanand Bal Sadan<br />
                      Moti Nagar, (Near DAV College)<br />
                      Aishbagh Road, Lucknow - 226004<br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-50 border border-gold-200">
                  <div className="p-3 rounded-xl bg-white border border-gold-300 text-saffron shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-charcoal-900 mb-1">
                      Phone & Mobile
                    </h4>
                    <div className="space-y-1">
                      <a href="tel:+919452158755" className="block hover:text-maroon font-medium">+91 9452158755</a>
                      <a href="tel:+919305882580" className="block hover:text-maroon font-medium">+91 9305882580</a>
                      <a href="tel:+919005059992" className="block hover:text-maroon font-medium">+91 9005059992</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-50 border border-gold-200">
                  <div className="p-3 rounded-xl bg-white border border-gold-300 text-saffron shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-charcoal-900 mb-1">
                      Official E-Mail
                    </h4>
                    <a href="mailto:dbslucknow@gmail.com" className="hover:text-maroon font-medium">
                      dbslucknow@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-50 border border-gold-200">
                  <div className="p-3 rounded-xl bg-white border border-gold-300 text-saffron shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-charcoal-900 mb-1">
                      Visiting & Office Hours
                    </h4>
                    <p className="leading-relaxed text-xs sm:text-sm">
                      Monday to Saturday: 9:00 AM – 6:00 PM<br />
                      Sunday: 10:00 AM – 2:00 PM (Prior appointment recommended)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-beige-200">
                <h3 className="font-serif font-bold text-2xl text-maroon mb-2">
                  Send a Message to Bal Sadan
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 mb-6">
                  Please fill in the form below. Submissions are securely stored and reviewed promptly by our administrators.
                </p>

                {status === 'success' && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feedbackMessage}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-300 text-red-800 text-xs sm:text-sm flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span>{feedbackMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field to block automated bots */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_check">Leave empty</label>
                    <input
                      type="text"
                      id="website_check"
                      name="website_check"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website_check}
                      onChange={(e) => setFormData({ ...formData, website_check: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Chandra"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-beige-300 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon text-sm bg-beige-50/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                        E-Mail Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-beige-300 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon text-sm bg-beige-50/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-beige-300 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon text-sm bg-beige-50/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                        Subject *
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-beige-300 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon text-sm bg-beige-50/40"
                      >
                        <option value="">Select a Subject</option>
                        <option value="Sponsoring Meals / Birthday">Sponsoring Meals / Birthday</option>
                        <option value="General Donation & 80G">General Donation & 80G Inquiry</option>
                        <option value="Campus Visit Request">Planning a Campus Visit</option>
                        <option value="Child Welfare Inquiry">Child Welfare Inquiry</option>
                        <option value="In-Kind / Ration Donation">In-Kind / Ration Donation</option>
                        <option value="Other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please enter your message, inquiry, or preferred dates..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-beige-300 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon text-sm bg-beige-50/40"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-maroon hover:bg-maroon-800 disabled:opacity-50 text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow transition-all group"
                    >
                      <Send className="w-4 h-4 text-saffron group-hover:translate-x-0.5 transition-transform" />
                      <span>{status === 'loading' ? 'Sending Message...' : 'Submit Message'}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Embedded Location Map Section */}
      <section className="py-12 bg-beige-50 border-t border-beige-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-serif font-bold text-2xl text-charcoal-900">
              Campus Location in Lucknow
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
              Located conveniently in Moti Nagar near DAV College, off Aishbagh Road, Lucknow.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-card border-2 border-gold-200 h-96 w-full bg-cream-100 relative">
            <iframe
              title="Shrimad Dayanand Bal Sadan Location Map"
              src="https://maps.google.com/maps?q=Moti%20Nagar%20DAV%20College%20Aishbagh%20Lucknow&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
