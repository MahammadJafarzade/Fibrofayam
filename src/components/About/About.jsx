import React from "react";
import "./About.css";
import kitchen from '../../Media/Screenshot_6.png'
import studio from '../../Media/Screenshot_7.png'
import roadSecurity from '../../Media/FIBROFAYAM_Kataloq-2023-albomnaya1-1304x2048.png'
const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="about--desc-img col-12 col-lg-12 col-md-12 col-xs-12">
              <div className="about--description-up col-12 col-lg-12 col-md-12 col-xs-12">
                <p>
                  <strong>AĞ MƏRMƏR</strong>
                  — digər təbii daşlarla müqayisədə bir sıra üstünlüklərə
                  malikdir.
                  </p>
                  <p>
                  Beləki, bu cür mərmərlərin rəng tonu, həmçinin üzəridəki
                  cizgizlər sayəsində evinizdə, ofisdə və digər
                  </p>
                  <p>
                  yerlərdə istənilən rəngə və istənilən interyerə rahatlıqla
                  uyğunlaşdırmaq mümkündür.
                  </p>
                  Material aşağıdakı xüsusiyyətlərə malikdir:
                  <p>
                  Hamar düz səth;
                  </p>
                  <p>
                  Suya davamlı;
                  </p>
                 <p>
                  Geniş rəng çeşidi.
                 </p>
                 <p>
                  Unikal naxış və cizgilər
                 </p>
              </div>
              <div className="about-img col-12 col-lg-12 col-md-12 col-xs-12">
                <img src={kitchen} alt="kitchen" />
                <img src={studio} alt="kitchen-studio" />
              </div>
              <div className="about--description-down col-12 col-lg-12 col-md-12 col-xs-12">
                <p>
                MƏRMƏR — GÖZƏLLİYİ VƏ ZƏRİFLİYİ İLƏ MƏŞHURDUR.Heç vaxt dəbdən düşməyən əbədi cazibəyə malikdir.
                 Şirkətimizdə müştərilərimizin istəyinə uyğun olan ölçülərdə — blok, kafel, plitələr və tökmə daşlar mövcuddur
                </p>
                <p>
                MƏRMƏR — döşəmədən tutmuş dəzgahlara və divar örtüyünə qədər
                 müxtəlif yerlərdə istifadə edilə bilər. 
                Həmçinin istənilən dizayna uyğun olaraq kəsilə və formalaşdırılada bilər
                
                </p>
                <p>MƏRMƏR — döşəmədən tutmuş dəzgahlara <br />
                 divar örtüyünə qədər müxtəlif yerlərdə<br />
                istifadə edilə bilər. Həmçinin istənilən dizayna 
                uyğun olaraq kəsilə və formalaşdırılada bilər
                </p>
                <p>
                MƏRMƏR gözəlliyi və zərifliyi ilə məşhurdur.
                Heç vaxt dəbdən düşməyən əbədi cazibəyə malikdir.
                </p>
                <p>MƏRMƏR — ağır ayaq trafiyinə, zərbələrə və ləkələrə 
                tab gətirə bilən davamlı materialdır.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
