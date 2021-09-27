const getBaseURL = () => {
    return new URL('.',
        import.meta.url);
};

class MyLogo extends HTMLElement {

    constructor() {
        super();
        // On crée le "shadow DOM"
        this.attachShadow({ mode: "open" });

        // récupérer les propriétés/attributs HTML
        this.couleur = this.getAttribute("couleur") || "#FF0000";
        this.bordure = this.getAttribute("bordure") || "#018001";
        this.shadowColor = this.getAttribute("shadowColor") || "#000000"
        this.text = this.getAttribute("text");
        this.animationClass = this.getAttribute("animation");
        this.controls = this.getAttribute("controls");
        this.size = this.getAttribute("size");
        this.opacity = this.getAttribute("opacity");
    }

    connectedCallback() {
        // ici on instancie l'interface graphique etc.
        const style = `.focus-in-expand {
            -webkit-animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            }

            .focus-in-expand-infinite {
                -webkit-animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite both;
                animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite both;
                }

            .flip-scale-2-hor-bottom {
                -webkit-animation: flip-scale-2-hor-bottom 0.5s linear infinite both;
                        animation: flip-scale-2-hor-bottom 0.5s linear infinite both;
            }
    
        *{box-sizing: border-box}
    
        #logo {
            color:red;
            font-size: 40px;
            border:5px solid green;
            width: fit-content;
            text-shadow: 0 0 10px #000000
        }

        #logo > .background {
            opacity : 1.0;
        }
        
        .boiteLogo{
            border: 1px solid;
            border-radius: 10px;
            margin-bottom: 5px;
            width: 500px;
            height: 200px;
            display: grid;
            place-items: center;
        }
        
        .boiteParametre{
            border: 1px solid;
            border-radius: 10px;
            width: 500px;
            height: 300px;
            padding : 5px;
        }
        
        .line{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    `
        const html = `
        <div class="boiteLogo">
            <div id="logo" class="focus-in-expand"> Mon logo
                <div class="background">
                </div>
            </div>
        </div>
        
        <div class="boiteParametre">
            <div class="line"> 
                <label> Texte </label> <input type="text" value="Mon logo" id="selecteurTexte">
            </div>

            <div class="line"> 
                <label> Couleur </label> <input type="color" value=${this.couleur} id="selecteurCouleur">
            </div>

            <div class="line"> 
                <label> Couleur Ombre </label> <input type="color" value=${this.shadowColor} id="selecteurCouleurOmbre">
            </div>            

            <div class="line"> 
                <label> Taille : </label> 
                <div "laBarre"> 5  <input type="range" value=00 min=5 max=100 id="selecteurTaille"> 100</div>
            </div>
        
            <hr>
        
            <div class="line"> 
                <label> BordureCouleur </label>  : <input type="color" value=${this.bordure} id="selecteurBordure">
            </div>
            <div class="line"> 
                <label> BordureTaille : </label>  
                <div "laBarre">5 <input type="range" value=0 min=1 max=10 id="selecteurBordureTaille"> 10</div>
            </div>

            <hr>

            <div class="line"> 
                <label> Background </label>
                <select name="Fond" id="selecteurBackground">
                    <option value="rien" id="0"> Ajout Background </option>
                    <option value="water" id="1"> Water </option>
                    <option value="fire" id="2"> Fire </option>
                    <option value="grass" id="3"> Grass </option>
                    <option value="cloud" id="4"> Cloud </option>
                    <option value="dirt" id="5"> Dirt </option>
                </select>
            </div>
            
            <!--
            <div class="line"> 
                <label> OpaciteBackgroud : </label>  
                <div "laBarre">1 <input type="range" value=10 min=0 max=10 id="selecteurOpaciteBackground"> 10</div>
            </div> 
            -->

            <hr>
            
            <div class="line"> 
                <label> Animation </label>
                <select name="animation" id="selecteurAnimation">
                    <option value="rien" id="0"> Selectionner Animation </option>
                    <option value="expand" id="1"> Expand </option>
                    <option value="flip" id="2"> Flip </option>
                </select>
            </div>
            
        </div>
        `

        const animationExemple = `  /* ----------------------------------------------
            * Generated by Animista on 2021-9-13 11:7:37
            * Licensed under FreeBSD License.
            * See http://animista.net/license for more info. 
            * w: http://animista.net, t: @cssanimista
            * ---------------------------------------------- */
            /**
            * ----------------------------------------
            * animation focus-in-expand
            * ----------------------------------------
            */
            @-webkit-keyframes focus-in-expand {
                0% {
                    letter-spacing: -0.5em;
                    -webkit-filter: blur(12px);
                    filter: blur(12px);
                    opacity: 0;
                }
                100% {
                    -webkit-filter: blur(0px);
                    filter: blur(0px);
                    opacity: 1;
                }
            }
            @keyframes focus-in-expand {
                0% {
                    letter-spacing: -0.5em;
                    -webkit-filter: blur(12px);
                    filter: blur(12px);
                    opacity: 0;
                }
                100% {
                    -webkit-filter: blur(0px);
                    filter: blur(0px);
                    opacity: 1;
                }
            }`

        const animationFlip = ` /* ----------------------------------------------
            * Generated by Animista on 2021-9-20 12:12:8
            * Licensed under FreeBSD License.
            * See http://animista.net/license for more info. 
            * w: http://animista.net, t: @cssanimista
            * ---------------------------------------------- */
        
            /**
            * ----------------------------------------
            * animation flip-scale-2-hor-bottom
            * ----------------------------------------
            */
            @-webkit-keyframes flip-scale-2-hor-bottom {
                0% {
                -webkit-transform: translateY(0) rotateX(0) scale(1);
                        transform: translateY(0) rotateX(0) scale(1);
                -webkit-transform-origin: 50% 100%;
                        transform-origin: 50% 100%;
                }
                50% {
                -webkit-transform: translateY(50%) rotateX(90deg) scale(2);
                        transform: translateY(50%) rotateX(90deg) scale(2);
                -webkit-transform-origin: 50% 50%;
                        transform-origin: 50% 50%;
                }
                100% {
                -webkit-transform: translateY(100%) rotateX(180deg) scale(1);
                        transform: translateY(100%) rotateX(180deg) scale(1);
                -webkit-transform-origin: 50% 0%;
                        transform-origin: 50% 0%;
                }
            }
            @keyframes flip-scale-2-hor-bottom {
                0% {
                -webkit-transform: translateY(0) rotateX(0) scale(1);
                        transform: translateY(0) rotateX(0) scale(1);
                -webkit-transform-origin: 50% 100%;
                        transform-origin: 50% 100%;
                }
                50% {
                -webkit-transform: translateY(50%) rotateX(90deg) scale(2);
                        transform: translateY(50%) rotateX(90deg) scale(2);
                -webkit-transform-origin: 50% 50%;
                        transform-origin: 50% 50%;
                }
                100% {
                -webkit-transform: translateY(100%) rotateX(180deg) scale(1);
                        transform: translateY(100%) rotateX(180deg) scale(1);
                -webkit-transform-origin: 50% 0%;
                        transform-origin: 50% 0%;
                }
            }`

        this.shadowRoot.innerHTML = `<style>${style+animationExemple+animationFlip}</style>` + html;

        this.logo = this.shadowRoot.querySelector("#logo");
        this.background = this.shadowRoot.querySelector(".background")
        this.declareEcouteurs();
    }

    declareEcouteurs() {
        this.shadowRoot.querySelector("#selecteurTexte").addEventListener("input", (event) => {
            this.changeTexte(event.target.value);
        });

        this.shadowRoot.querySelector("#selecteurCouleur").addEventListener("input", (event) => {
            this.changeCouleur(event.target.value);
        });

        this.shadowRoot.querySelector("#selecteurCouleurOmbre").addEventListener("input", (event) => {
            this.changeCouleurOmbre(event.target.value);
        });

        this.shadowRoot.querySelector("#selecteurBordure").addEventListener("input", (event) => {
            this.changeBordureCouleur(event.target.value);
        });

        this.shadowRoot.querySelector("#selecteurBordureTaille").addEventListener("input", (event) => {
            this.changeBordureTaille(event.target.value);
        });

        this.shadowRoot.querySelector("#selecteurTaille").addEventListener("input", (event) => {
            this.changeSize(event.target.value);
        });

        // this.shadowRoot.querySelector("#selecteurBackground").addEventListener("input", (event) => {
        //     this.changeBackground(event.target.value);
        // });

        this.shadowRoot.querySelector("#selecteurOpaciteBackground").addEventListener("input", (event) => {
            this.changeOpaciteBackground(event.target.value);
        });

        this.shadowRoot.querySelector("#selecteurAnimation").addEventListener("input", (event) => {
            this.changeAnimation(event.target.value);
        });
    }

    // Fonction
    changeTexte(val) {
        this.logo.textContent = val;
    }

    changeCouleur(val) {
        this.logo.style.color = val;
    }

    changeCouleurOmbre(val) {
        this.logo.style.textShadow = "0 0 10px " + val;
    }

    changeBackground(val) {
        let fond;
        if (val == "water") {
            fond = "https://i.pinimg.com/originals/77/8a/cb/778acb31afa90cf2bc2d1d4c4426bd16.jpg";
        } else if (val == "fire") {
            fond = "https://th.bing.com/th/id/OIP.cWXKC3exgN38S3u6YI3JxQHaEK?pid=ImgDet&rs=1"
        } else if (val == "grass") {
            fond = "https://th.bing.com/th/id/OIP.PRI5CKZcqveLWFR_FODLTQHaGd?w=196&h=180&c=7&r=0&o=5&pid=1.7"
        } else if (val == "cloud") {
            fond = "https://th.bing.com/th/id/OIP.BvO2h9uEakrK9Gl-EUiAlwHaEF?w=321&h=180&c=7&r=0&o=5&pid=1.7"
        } else if (val == "dirt") {
            fond = "https://th.bing.com/th/id/OIP.2hYyYwK8Z07a0AsbmO39mAHaFj?w=217&h=180&c=7&r=0&o=5&pid=1.7"
        }

        //this.logo.style.background = "url(" + getBaseURL() + "flamme.jpg)";
        this.logo.style.backgroundImage = "url(" + fond + ")";
    }

    // changeOpaciteBackground(val) {
    //     switch (val) {
    //         case '1':
    //             this.background.opacity = "0.1"
    //         case '2':
    //             this.background.opacity = "0.2"
    //         case '3':
    //             this.background.opacity = "0.3"
    //         case '4':
    //             this.background.opacity = "0.4"
    //         case '5':
    //             this.background.opacity = "0.5"
    //         case '6':
    //             this.background.opacity = "0.6"
    //         case '7':
    //             this.background.opacity = "0.7"
    //         case '8':
    //             this.background.opacity = "0.8"
    //         case '9':
    //             this.background.opacity = "0.9"
    //         case '10':
    //             this.background.opacity = "1.0"
    //     }
    // }

    changeBordureCouleur(val) {
        this.logo.style.borderColor = val;
    }

    changeBordureTaille(val) {
        this.logo.style.borderWidth = val + "px";
    }

    changeSize(val) {
        this.logo.style.fontSize = val + "px";
    }

    changeAnimation(val) {
        console.log(val)
        if (val == "expand") {
            this.logo.className = "focus-in-expand-infinite ";
        } else if (val == "flip") {
            this.logo.className = "flip-scale-2-hor-bottom";
        } else {
            this.logo.className = "focus-in-expand";
        }
    }
}

customElements.define("my-logo", MyLogo);