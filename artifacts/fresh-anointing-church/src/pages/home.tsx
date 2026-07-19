import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight, Heart, Users, BookOpen, Music, Youtube, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Container, fadeUp, staggerContainer } from "@/components/ui/layout";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Assets
import churchBanner from '@assets/1c5872f3-0b61-4cad-9487-56d1ca65c62d_1784486058624.jpg';
import sanctuaryLight from '@assets/Main_Pic_1784487403894.png';
import worshipHands from '@assets/Elders_1784487092602.png';
import communityFellowship from '@assets/Pastor_Hands_1784488102393.jpg';
import kidsYouth from '@assets/DSCF0139_1784489541536.JPG';
import outreachBash from '@assets/End_of_year_Bash_1784489570003.jpg';
import baptismPhoto from '@assets/Batism_1784489929199.jpg';
import mensGroup from '@assets/mens_group_1784490112968.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-amber-500/30">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] max-h-[1000px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax-like feel (sticky center, overflow hidden) */}
        <div className="absolute inset-0 z-0">
          <img
            src={churchBanner}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center scale-105"
            style={{ filter: 'brightness(0.25)' }}
          />
          {/* Gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-stone-900/50" />
        </div>

        <Container className="relative z-10 text-center flex flex-col items-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 flex flex-col items-center gap-3"
          >
            <span className="text-amber-400 font-medium tracking-[0.2em] uppercase text-xs md:text-sm">
              International Pentecostal Holiness Church
            </span>
            <div className="h-px w-24 bg-amber-500/50" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold tracking-tight mb-6 drop-shadow-lg"
          >
            Fresh Anointing
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg md:text-2xl text-stone-200 max-w-2xl font-light mb-10 drop-shadow-md"
          >
            A place of powerful encounters, authentic community, and enduring grace. 
            Welcome home to El Reno.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button size="lg" variant="gold" className="px-8 text-base h-14 w-full sm:w-auto" asChild>
              <a href="#visit">Plan Your Visit</a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 text-base h-14 w-full sm:w-auto border-white/60 text-white bg-white/15 hover:bg-white hover:text-stone-900 backdrop-blur-sm" asChild>
              <a href="#about">Our Story</a>
            </Button>
          </motion.div>
        </Container>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* 2. INVITATION / SERVICE TIMES */}
      <Section id="visit" className="bg-white border-b border-stone-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col gap-8"
            >
              <div>
                <motion.span variants={fadeUp} className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                  Join Us This Week
                </motion.span>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-stone-900 font-medium leading-tight mb-6">
                  Experience the <br/><span className="text-amber-700 italic">presence of God</span> together.
                </motion.h2>
                <motion.p variants={fadeUp} className="text-stone-600 text-lg leading-relaxed">
                  Whether you've been in church your whole life or you're stepping through the doors for the first time, there is a place for you here. Come as you are, and expect God to move.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <motion.div variants={fadeUp} className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-amber-600">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-serif text-xl text-stone-900 mb-2">Sunday Morning</h3>
                  <p className="text-amber-700 font-semibold text-lg mb-1">10:30 AM</p>
                  <p className="text-stone-500 text-sm">Worship, Word & Kids Ministry</p>
                </motion.div>

                <motion.div variants={fadeUp} className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-amber-600">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-serif text-xl text-stone-900 mb-2">Wednesday Night</h3>
                  <p className="text-amber-700 font-semibold text-lg mb-1">6:00 PM</p>
                  <p className="text-stone-500 text-sm">Midweek Bible Study & Prayer</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
                <img 
                  src={sanctuaryLight} 
                  alt="Sunlit church sanctuary" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 border border-black/10 rounded-3xl z-10 pointer-events-none" />
              </div>
              
              {/* Decorative elements */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] z-20">
                <div className="flex items-start gap-4">
                  <MapPin className="text-amber-600 shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-stone-900 mb-1">Location</p>
                    <p className="text-sm text-stone-600 leading-snug">
                      1300 West Watts<br />El Reno, OK 73036
                    </p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=1300+West+Watts,+El+Reno,+OK+73036" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-amber-600 text-sm font-medium mt-2 inline-flex items-center hover:text-amber-700 transition-colors"
                    >
                      Get Directions <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 3. ABOUT / MISSION */}
      <Section id="about" className="bg-stone-50 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="max-w-xs sm:max-w-sm lg:max-w-none mx-auto aspect-square md:aspect-[3/4] rounded-full overflow-hidden border-8 border-white shadow-xl relative z-10">
                <img 
                  src={worshipHands} 
                  alt="People worshipping" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-64 h-64 bg-amber-100 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-6 lg:col-start-7 flex flex-col gap-6"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-stone-900 mb-2">
                A heritage of faith.<br />A future of hope.
              </motion.h2>
              <motion.div variants={fadeUp} className="h-1 w-20 bg-amber-500 rounded-full mb-4" />
              
              <motion.p variants={fadeUp} className="text-lg text-stone-600 leading-relaxed">
                As a proud congregation of the <strong className="text-stone-900 font-medium">International Pentecostal Holiness Church</strong>, our roots go deep into the historic Christian faith, emphasizing the empowering work of the Holy Spirit in our daily lives.
              </motion.p>
              
              <motion.p variants={fadeUp} className="text-lg text-stone-600 leading-relaxed">
                At Fresh Anointing, we believe that church isn't just a Sunday event—it's a family. We are passionate about seeing lives transformed, families restored, and our city of El Reno impacted by the love of Jesus Christ.
              </motion.p>

              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-6 mt-8">
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="font-serif text-xl text-stone-900 mb-1">Our Mission</h4>
                  <p className="text-stone-600 text-sm">To encounter God, equip believers, and extend His kingdom.</p>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="font-serif text-xl text-stone-900 mb-1">Our Beliefs</h4>
                  <p className="text-stone-600 text-sm">Rooted in Scripture, empowered by the Spirit, living in grace.</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </Container>
      </Section>

      {/* 4. MINISTRIES */}
      <Section id="ministries" className="bg-stone-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
        
        <Container className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm mb-3 block">
              Get Connected
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Ministries & Community</h2>
            <p className="text-stone-400 text-lg">
              Find your people, grow in your faith, and discover your purpose. There's a place for everyone in the family.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Heart size={32} />,
                title: "Kids & Youth",
                desc: "Raising the next generation to know God intimately and follow Him boldly.",
                image: kidsYouth,
              },
              {
                icon: <BookOpen size={32} />,
                title: "Baptism",
                desc: "Publicly declaring your faith through the waters of baptism — a powerful step of obedience and new life in Christ.",
                image: baptismPhoto,
              },
              {
                icon: <Users size={32} />,
                title: "MOG — Men of God",
                desc: "Iron sharpens iron. Men gathering every 2nd Saturday at 9AM to pray, grow, and become the men God has called them to be.",
                image: mensGroup,
              },
              {
                icon: <Users size={32} />,
                title: "Outreach",
                desc: "Taking the love of Christ beyond our walls and into the heart of El Reno.",
                image: outreachBash,
              }
            ].map((min, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-stone-800/50 border border-stone-700/50 rounded-2xl hover:bg-stone-800 transition-colors overflow-hidden"
              >
                {min.image && (
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={min.image}
                      alt={min.title}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="text-amber-500 mb-6">{min.icon}</div>
                  <h3 className="font-serif text-xl mb-3">{min.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{min.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. IMAGE BREAK / QUOTE */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={communityFellowship} 
            alt="Church community fellowship" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/70 mix-blend-multiply" />
        </div>
        
        <Container className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Music className="w-12 h-12 text-amber-500 mx-auto mb-8 opacity-80" />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-white leading-tight mb-8">
              "Behold, how good and how pleasant it is for brethren to dwell together in unity!"
            </h2>
            <p className="text-amber-400 tracking-widest uppercase text-sm font-semibold">
              Psalm 133:1
            </p>
          </motion.div>
        </Container>
      </section>

      {/* 6. CONNECT WITH US LIVE — YOUTUBE */}
      <Section id="live" className="bg-stone-900 text-white overflow-hidden">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
              <Youtube className="text-red-500 w-5 h-5" />
              <span className="text-red-400 uppercase tracking-widest text-sm font-semibold">Watch Online</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif mb-4">
              Sermons &amp; <span className="text-amber-400">Messages</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-stone-400 text-lg max-w-2xl mx-auto">
              Can't make it in person? Watch our sermons and messages on YouTube — powerful teaching and worship available anytime, anywhere.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            {/* YouTube embed — latest video */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-700 mb-8" style={{ aspectRatio: '16/9' }}>
              <iframe
                src="https://www.youtube.com/embed?listType=user_uploads&list=FreshAnointingIPHC"
                title="Fresh Anointing Church — Sermons & Messages"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.youtube.com/@FreshAnointingIPHC/videos"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-red-900/40 hover:scale-105"
              >
                <Youtube className="w-5 h-5" />
                Watch on YouTube
              </a>
              <a
                href="https://www.youtube.com/@FreshAnointingIPHC"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold px-8 py-4 rounded-xl border border-stone-600 transition-all duration-200 hover:scale-105"
              >
                Subscribe to Our Channel
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* 7. GIVE — CASH APP */}
      <Section id="give" className="bg-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
              <Heart className="text-amber-500 w-5 h-5" />
              <span className="text-amber-600 uppercase tracking-widest text-sm font-semibold">Give Online</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">
              Sow Into the Kingdom
            </motion.h2>
            <motion.p variants={fadeUp} className="text-stone-500 text-lg mb-12 max-w-xl mx-auto">
              Your generosity fuels our mission — reaching El Reno, raising up families, and advancing the gospel. Give quickly and securely through Cash App.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden"
            >
              {/* decorative glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center gap-8">
                {/* Cash App logo mark */}
                <div className="w-20 h-20 bg-[#00D632] rounded-2xl flex items-center justify-center shadow-lg shadow-green-900/30">
                  <svg viewBox="0 0 24 24" className="w-11 h-11 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.313 17.027l-.235 1.044a.398.398 0 0 1-.392.319h-1.372a.398.398 0 0 1-.39-.48l.217-.967a5.27 5.27 0 0 1-2.533-1.153.398.398 0 0 1-.03-.567l.944-1.01a.398.398 0 0 1 .556-.025c.56.503 1.29.795 2.07.795.672 0 1.103-.288 1.103-.737 0-.388-.27-.619-1.28-.895-1.6-.427-2.87-1.076-2.87-2.706 0-1.25.862-2.22 2.25-2.588l.218-.97a.398.398 0 0 1 .39-.32h1.372c.244 0 .42.228.37.467l-.213.946a5.1 5.1 0 0 1 1.994.923.398.398 0 0 1 .056.567l-.9 1.04a.398.398 0 0 1-.55.055 3.215 3.215 0 0 0-1.877-.624c-.64 0-.998.27-.998.674 0 .363.313.548 1.395.844 1.724.462 2.766 1.154 2.766 2.778 0 1.3-.914 2.305-2.26 2.616z"/>
                  </svg>
                </div>

                <div>
                  <p className="text-stone-400 text-sm uppercase tracking-widest mb-2">Our Cash App</p>
                  <p className="text-4xl md:text-5xl font-bold text-white tracking-tight">$freshanointing888</p>
                </div>

                <a
                  href="https://cash.app/$freshanointing888"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#00D632] hover:bg-[#00b82b] text-white font-bold text-lg px-10 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-green-900/30 hover:scale-105 w-full sm:w-auto"
                >
                  Give Now on Cash App
                </a>

                <p className="text-stone-500 text-sm">
                  "Each of you should give what you have decided in your heart to give." — 2 Cor. 9:7
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* 8. CONTACT / FOOTER CTA */}
      <Section id="contact" className="bg-amber-50">
        <Container>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-amber-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center">
                <h2 className="text-3xl font-serif text-stone-900 mb-4">We'd love to hear from you.</h2>
                <p className="text-stone-600 mb-8">
                  Have a question? Need prayer? We are here for you. Reach out to our pastoral team.
                </p>
                
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all bg-stone-50"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all bg-stone-50"
                  />
                  <textarea 
                    placeholder="How can we help?" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all bg-stone-50 resize-none"
                  />
                  <Button variant="gold" size="lg" className="w-full mt-2" type="button">
                    Send Message
                  </Button>
                </form>
              </div>
              
              <div className="bg-stone-900 p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif mb-8 text-amber-500">Contact Info</h3>
                  
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="text-amber-500 shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-white mb-1">Address</p>
                        <p className="text-stone-400 text-sm">1300 West Watts<br/>El Reno, OK 73036</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="text-amber-500 shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-white mb-1">Service Times</p>
                        <p className="text-stone-400 text-sm">Sunday: 10:30 AM<br/>Wednesday: 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-stone-800 relative z-10">
                  <p className="text-stone-400 text-sm">
                    FreshAnointingChurch.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
