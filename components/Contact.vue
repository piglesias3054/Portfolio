<template>
  <div class="contact">
    <div id="cv" class="cv">
      <img class="cvPhoto" id="cvPhoto" src="/cv.png" alt="" />
      <p>
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
    <div id="closer1" class="contact_item">
      <img class="logo" src="/contact.png" alt="" />
    </div>
    <span id="closer2" class="contact_item closerText"><img src="/message2.gif" alt=""></span>

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
  },

  
};


</script>

<style>
.cv {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: left;
  padding-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: top;
  opacity: 0;
}

.cvPhoto {
  margin-right: 1rem;
  width: 30%;
  height: 30%;
}

.contact {
  background-color: solid white;
  padding: 0;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
}

.contact_item {
  padding: 0.5rem;
  margin-top: 20rem;
  opacity: 0.1;
  max-width: 40%;
  align-self: center;
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

.logo {
  width: 100%;
  height: auto;
}

.contact_item img {
  height: auto;
  width: 80%;
}
</style>