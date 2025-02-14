'use client'
import React from 'react'

export default function Resume() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="font-playfair text-6xl font-bold text-green-900 mb-16 text-center">RESUME</h1>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Work Experience */}
            <div>
              <h2 className="flex items-center text-2xl font-semibold text-green-800 mb-6">
                <span className="mr-2">💼</span> Work Experience
              </h2>
              <div className="space-y-6">
                <div className="hover:scale-105 transition-transform">
                  <h3 className="text-green-700 font-semibold">▶ Future Company</h3>
                  <p className="text-green-600">2022.09 - Present</p>
                </div>
                <div className="hover:scale-105 transition-transform">
                  <h3 className="text-green-700 font-semibold">▶ Innovation Company</h3>
                  <p className="text-green-600">2021.03 - 2022.02</p>
                </div>
              </div>
            </div>

            {/* Activities */}
            <div>
              <h2 className="flex items-center text-2xl font-semibold text-green-800 mb-6">
                <span className="mr-2">🚀</span> Activities
              </h2>
              <div className="space-y-6">
                <div className="hover:scale-105 transition-transform">
                  <h3 className="text-green-700 font-semibold">▶ Supporters Club</h3>
                  <p className="text-green-600">2022.06 - Present</p>
                </div>
                <div className="hover:scale-105 transition-transform">
                  <h3 className="text-green-700 font-semibold">• Club Activities</h3>
                  <p className="text-green-600">2018.07 - 2022.03</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <h2 className="flex items-center text-2xl font-semibold text-green-800 mb-6">
                <span className="mr-2">🎓</span> Education
              </h2>
              <div className="space-y-6">
                <div className="hover:scale-105 transition-transform">
                  <h3 className="text-green-700 font-semibold">• OO University</h3>
                  <p className="text-green-600">2024.09 - Present</p>
                  <p className="text-green-600">Major in OO</p>
                </div>
                <div className="hover:scale-105 transition-transform">
                  <h3 className="text-green-700 font-semibold">• Language Study</h3>
                  <p className="text-green-600">2022.03 - 2022.05</p>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div>
              <h2 className="flex items-center text-2xl font-semibold text-green-800 mb-6">
                <span className="mr-2">🏆</span> Awards
              </h2>
              <div className="hover:scale-105 transition-transform">
                <h3 className="text-green-700 font-semibold">• Grand Prize in Competition</h3>
                <p className="text-green-600">2024.09</p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="flex items-center text-2xl font-semibold text-green-800 mb-6">
                <span className="mr-2">📝</span> Certifications
              </h2>
              <div className="space-y-6">
                <div className="hover:scale-105 transition-transform">
                  <h3 className="text-green-700 font-semibold">• HSK Level 6</h3>
                  <p className="text-green-600">2018.08</p>
                </div>
                <div className="hover:scale-105 transition-transform">
                  <h3 className="text-green-700 font-semibold">• TOEFL</h3>
                  <p className="text-green-600">2022.09</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
