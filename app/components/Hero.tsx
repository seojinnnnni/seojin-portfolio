'use client'
import React from 'react'

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* 상단 프로필 섹션 */}
        <div className="flex flex-col md:flex-row items-start gap-16 mb-20">
          {/* 프로필 이미지 */}
          <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0 hover:scale-105 transition-transform duration-300">
            <img 
              src="/profile-woman.jpg"
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* 텍스트 섹션 */}
          <div className="flex-1">
            <h1 className="font-playfair text-6xl font-bold text-green-900 mb-8 hover:text-green-800 transition-colors">
              Seojin's Portfolio
            </h1>
            <div className="space-y-8">
              {/* About me 섹션 */}
              <div>
                <h2 className="font-playfair text-3xl font-semibold text-green-800 mb-4">
                  About me
                </h2>
                <div className="space-y-2">
                  <div className="text-green-700 text-lg leading-relaxed font-inter">
                  I'm a future web developer.
                  </div>
                  <div className="text-green-700 text-lg leading-relaxed font-inter">
                  I prioritize user experience.
                  </div>
                  <div className="text-green-700 text-lg leading-relaxed font-inter">
                  I have a passion for creativity and innovation.😊
                  </div>
                </div>
              </div>

              {/* Contacts 섹션 */}
              <div>
                <h2 className="font-playfair text-3xl font-semibold text-green-800 mb-4">
                  Contacts
                </h2>
                <div className="space-y-3">
                  <div className="text-green-700 font-inter">tel: +82-10-1234-5678</div>
                  <div className="text-green-700 font-inter">e-mail: fmfle0283@gmail.com</div>
                  <div className="flex gap-6 mt-4">
                    <a href="#" className="text-green-600 hover:text-green-800 transition-colors font-inter hover:scale-105 transform">Youtube</a>
                    <a href="#" className="text-green-600 hover:text-green-800 transition-colors font-inter hover:scale-105 transform">Instagram</a>
                    <a href="#" className="text-green-600 hover:text-green-800 transition-colors font-inter hover:scale-105 transform">Blog</a>
                    <a href="#" className="text-green-600 hover:text-green-800 transition-colors font-inter hover:scale-105 transform">Brunch</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RESUME 섹션 */}
        <h1 className="font-playfair text-5xl font-bold text-gray-800 mb-12">RESUME</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* 왼쪽 컬럼 */}
          <div className="space-y-12">
            {/* 경력 사항 */}
            <div>
              <h2 className="text-2xl font-playfair font-semibold text-gray-800 mb-6 flex items-center gap-2">
                💼 Work Experience
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium font-inter">▶ Future Company</h3>
                  <div className="text-gray-600 font-inter">2024.01 - now</div>
                </div>
                <div>
                  <h3 className="font-medium font-inter">▶ Innovation Company</h3>
                  <div className="text-gray-600 font-inter">2022.03 - 2023.09</div>
                </div>
              </div>
            </div>

            {/* 대외 활동 */}
            <div>
              <h2 className="text-2xl font-playfair font-semibold text-gray-800 mb-6 flex items-center gap-2">
                🚀 Activities
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium font-inter">▶ Supporters Club</h3>
                  <div className="text-gray-600 font-inter">2023.08 - now</div>
                </div>
                <div>
                  <h3 className="font-medium font-inter">• Club Activities</h3>
                  <div className="text-gray-600 font-inter">2019.08 - 2022.09</div>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽 컬럼 */}
          <div className="space-y-12">
            {/* 학력 */}
            <div>
              <h2 className="text-2xl font-playfair font-semibold text-gray-800 mb-6 flex items-center gap-2">
                🎓 Education
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium font-inter">• OO University</h3>
                  <div className="text-gray-600 font-inter">2024.09 - now</div>
                  <div className="text-gray-600 font-inter">Major in OO</div>
                </div>
                <div>
                  <h3 className="font-medium font-inter">• Language Study</h3>
                  <div className="text-gray-600 font-inter">2022.07 - 2022.12</div>
                </div>
              </div>
            </div>

            {/* 수상 내역 */}
            <div>
              <h2 className="text-2xl font-playfair font-semibold text-gray-800 mb-6 flex items-center gap-2">
                🏆 Awards
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium font-inter">• Grand Prize in Competition</h3>
                  <div className="text-gray-600 font-inter">2024.09</div>
                </div>
              </div>
            </div>

            {/* 자격증 */}
            <div>
              <h2 className="text-2xl font-playfair font-semibold text-gray-800 mb-6 flex items-center gap-2">
                📝 Certifications
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium font-inter">• HSK Level 6</h3>
                  <div className="text-gray-600 font-inter">2018.08</div>
                </div>
                <div>
                  <h3 className="font-medium font-inter">• TOEFL</h3>
                  <div className="text-gray-600 font-inter">2022.09</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}