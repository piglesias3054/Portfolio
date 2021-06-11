<template>
  <div class="contact">
    <div id="cv" class="cv">
      <img class="cvPhoto" id="cvPhoto" src="/cv.png" alt="" />
      <p class="cv_text">
        <span style="color: #000000"><strong>Formaci&oacute;n</strong></span
        ><br /><span style="color: #808080"
          ><em>Dise&ntilde;o Gr&aacute;fico / ESDMadrid</em></span
        ><br /><span style="color: #808080"
          ><em
            >T&eacute;cnico Superior en Ilustraci&oacute;n / Escuela
            Artediez</em
          ></span
        ><br /><span style="color: #000000"><strong>Experiencia</strong></span
        ><br /><span style="color: #000000"><strong>2017</strong></span
        ><br /><span style="color: #808080"
          ><em>Monitora / FLIC FESTIVAL Madrid</em></span
        ><br /><span style="color: #000000"><strong>2017/ 2018</strong></span
        ><br /><span style="color: #808080"
          ><em
            >Cursos de Iniciaci&oacute;n al C&oacute;mic / Centro C&iacute;vico
            Canal De Castilla</em
          ></span
        ><br /><span style="color: #808080"
          ><em>Contrato de Ilustradora Freelance / Manos Unidas</em></span
        ><br /><span style="color: #808080"
          ><em
            >Contrato de Ilustradora Freelance / &ldquo;Familias&rdquo; de
            Sergio Palacios</em
          ></span
        ><br /><span style="color: #000000"><strong>Aptitudes</strong></span
        ><br /><span style="color: #808080"
          ><em>Conocimientos altos a nivel usuario / Windows</em></span
        ><br /><span style="color: #808080"
          ><em
            >Pack Adobe / Photoshop, Illustrator, Indesign, After Effects, </em
          ><em>Premiere Pro</em></span
        ><br /><span style="color: #808080"
          ><em
            >Softwares de Ilustraci&oacute;n / Procreate, Gimp, Clip Studio
            Paint, SAI</em
          ></span
        ><br /><span style="color: #808080"
          ><em>Modelado 3D / NomadSculpt</em></span
        ><br /><span style="color: #000000"><strong>Idiomas</strong></span
        ><br /><span style="color: #808080"
          ><em>Ingl&eacute;s / Nivel Alto</em></span
        ><br /><span style="color: #808080"
          ><em>Franc&eacute;s / Nivel Medio</em></span
        >
      </p>
    </div>
    <div class="backgroundWhite">
      <div class="contact_end">
        <div id="closer1" class="contact_item ">
          <img class="logo" src="/contact.png" alt="" />
        </div>
        <div id="closer2" class="contact_item">
          <img class="logo" src="/message2.gif" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const controller = new this.$scrollmagic.Controller();
    var fadeinContact1 = new this.$scrollmagic.Scene({
      triggerElement: ".contact_item",
    })
      .setTween("#closer1", 2, {
        scale: 1.1,
        opacity: 1,
      })
      .addTo(controller);

    var fadeinContact2 = new this.$scrollmagic.Scene({
      triggerElement: ".contact_item",
    })
      .setTween("#closer2", 2, {
        scale: 1.2,
        opacity: 1,
      })
      .addTo(controller);

    var CV = new this.$scrollmagic.Scene({
      triggerElement: ".cv",
    })
      .setTween("#cv", 4, {
        opacity: 1,
      })
      .addTo(controller);

    var pinIntro = new this.$scrollmagic.Scene({
      triggerElement: "#cv",
      triggerHook: 0,
    })
      .setPin("#cv")
      .addTo(controller);
  },
};
</script>

<style>
#cv[style] {
  justify-content: center !important;
  height: auto !important;
  width: auto !important;
  display: flex !important;
  justify-content: center !important;
  left: 0 !important;
  right: 0 !important;
}

#cv {
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: left;
  left: 0;
  padding-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: top;
  opacity: 0;
  margin-top: 0rem;
}

.cv_text{
  font-size: 0.8rem;
  padding-right: 1rem;
}

.cvPhoto {
  margin-right: 1rem;
  width: 30%;
  height: 30%;
}

.contact {
  background-color: solid white;
  margin-top: 15rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
}

.contact_item {
  opacity: 0.1;
  align-self: center;
  margin-bottom: 20rem;
}


.backgroundWhite {
  background-color: #ffffff;
  margin-top: 10rem;
  width: 100vw;
  z-index: 3;
  height: 100rem;
}

.contact_end {
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  margin-top: 40rem;
}

.closerText {
  margin-top: 20rem;
  margin-bottom: 15rem;
  max-width: 20rem;
  font-style: normal;
  align-self: center;
  font-weight: 400;
  font-size: 30px;
  line-height: 26px;
  color: #2a5cff;
  opacity: 0.2;
  z-index: 2;
}

.contact_item img {
  max-width: 20rem !important;
  max-height: auto !important;
  align-self: center;
}

</style>