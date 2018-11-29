import React, {Component} from 'react';
import './app.css';


const Form0 = (props) => {

    // récupère le scope
    const thisParent = props.thisParent

    // mise en page conditionnelle
    const missingFields = props.missingFields
    const displayObject = missingFields.length > 0 ? {opacity: 1} : {opacity: 0}

    return (
        <fieldset id="stage0" data-check="input">

            <p className="app__title-recap">à propos de vous</p>

            <label htmlFor="civil" className="app__label">

                <p>Civilité</p>
                <select name="civil" id="civil"
                        defaultValue={thisParent.state.data.civil ? thisParent.state.data.civil.value : "not"}
                        onChange={thisParent.changeEvent}
                        data-change-sentence="Civilité renseignée" data-change-name="civil"
                        className="app__to-filled">
                    <option value="mme">madame</option>
                    <option value="mr">monsieur</option>
                    <option value="other">neutre</option>
                </select>

            </label>

            <label htmlFor="firstname" className={ missingFields.indexOf("firstname") > -1 ? "app__label app__label--required app__label--missing" : "app__label app__label--required" }>

                <p>Nom</p>
                <input type="text" placeholder="- que la famille" name="firstname" id="firstname"
                       value={thisParent.state.data.firstname ? thisParent.state.data.firstname.value : "" }
                       onChange={thisParent.changeEvent}
                       data-change-sentence="Nom renseigné" data-change-name="firstname"
                       className="app__to-filled"/>
                <span></span>

            </label>

            <label htmlFor="lastname" className={ missingFields.indexOf("lastname") > -1 ? "app__label app__label--required app__label--missing" : "app__label app__label--required" }>

                <p>Prénom</p>
                <input type="text" name="lastname" placeholder="- le premier suffira" id="lastname"
                       value={thisParent.state.data.lastname ? thisParent.state.data.lastname.value : "" }
                       onChange={thisParent.changeEvent}
                       data-change-sentence="Prénom renseigné" data-change-name="lastname"
                       className="app__to-filled"/>
                <span></span>

            </label>

            <label htmlFor="email" className={ missingFields.indexOf("email") > -1 ? "app__label app__label--required app__label--missing" : "app__label app__label--required" }>

                <p>Email</p>
                <input type="email" placeholder="- et pas un faux ! " name="email" id="email"
                       value={thisParent.state.data.email ? thisParent.state.data.email.value : "" }
                       onChange={thisParent.changeEvent}
                       data-change-sentence="Email renseigné" data-change-name="email"
                       className="app__to-filled"/>
                <span></span>

            </label>

            <label htmlFor="phone" className="app__label">

                <p>Téléphone</p>
                <input type="phone" name="phone" placeholder="- à l'international +33" id="phone"
                       value={thisParent.state.data.phone ? thisParent.state.data.phone.value : "" }
                       onChange={thisParent.changeEvent}
                       data-change-sentence="Téléphone renseigné" data-change-name="phone"
                       className="app__to-filled"/>
                <span></span>

            </label>

            <div className="app__button-container">
                <button onClick={thisParent.clickNav} data-direction="next">suivant</button>
            </div>

            <p className="form__error-message" style={displayObject}> Merci de remplir les champs obligatoires *</p>

        </fieldset>
    )
}


const Form1 = (props) => {

    // récupère le scope
    const thisParent = props.thisParent

    // mise en page conditionnelle
    const missingFields = props.missingFields
    const displayObject = missingFields.length > 0 ? {display: "block"} : {display: "none"}

    return (
        <fieldset id="stage1" data-check="radio">

            <p className="app__title-recap">vos préférences</p>

           <div className="app__radio-container">

               <label htmlFor="vue" className={ missingFields.indexOf("vue") > -1 ? "app__label app__label--radio app__label--required app__label--missing" : "app__label app__label--radio app__label--required"} >

                   <input type="radio" value="Vue" id="vue"
                          onChange={(e)=> {
                              if (e.target.checked) thisParent.changeEvent(e)
                          }}
                          checked={thisParent.state.data.framework &&  thisParent.state.data.framework.value === "Vue" ? "checked" : false}
                          data-change-sentence="Framework préféré" data-change-name="framework"/>
                   <span>Vue</span>

               </label>

               <label htmlFor="angular" className={ missingFields.indexOf("angular") > -1 ? "app__label app__label--radio app__label--required app__label--missing" : "app__label app__label--radio app__label--required"}>

                   <input type="radio" value="Angular" id="angular"
                          onChange={(e)=> {
                              if (e.target.checked) thisParent.changeEvent(e)
                          }}
                          checked={thisParent.state.data.framework && thisParent.state.data.framework.value === "Angular" ? "checked" : false}
                          data-change-sentence="Framework préféré" data-change-name="framework"/>
                   <span>Angular</span>

               </label>

               <label htmlFor="symfony" className={ missingFields.indexOf("symfony") > -1 ? "app__label app__label--radio app__label--required app__label--missing" : "app__label app__label--radio app__label--required"}>

                   <input type="radio" value="Symfony" id="symfony"
                          onChange={(e)=> {
                              if (e.target.checked) thisParent.changeEvent(e)
                          }}
                          checked={thisParent.state.data.framework && thisParent.state.data.framework.value === "Symfony" ? "checked" : false}
                          data-change-sentence="Framework préféré" data-change-name="framework"
                   />
                   <span>Symfony</span>

               </label>

               <p>Framework préféré</p>

           </div>

            <label htmlFor="other" className="app__label">

                <p>Autre</p>
                <textarea name="other" id="other" rows="1"
                          className="app__to-filled"
                          onChange={thisParent.changeEvent}
                          value={thisParent.state.data.frameworkOther ? thisParent.state.data.frameworkOther.value : ""}
                          data-change-sentence="Autre framework préféré" data-change-name="frameworkOther" />

                <span></span>

            </label>

            <div className="app__button-container">
                <button onClick={thisParent.clickNav} data-direction="prev">précédent</button>
                <button onClick={thisParent.clickNav} data-direction="next">suivant</button>
            </div>

            <p className="form__error-message" style={displayObject}> Merci de remplir les champs obligatoires</p>

        </fieldset>
    )
}


const Form2 = (data) => {

    const thisParent = data.thisParent

    return (
        <div id="stage2">

            <p className="app__title-recap">récapitulatif des informations fournies</p>

            <ul className="app__list-recap">
                {Object.keys(thisParent.state.data).map((item, key) => {

                    // affiche uniquement si rempli
                    if (thisParent.state.data[item].value !== "" ) {

                        return (
                            <li key={key} className="app__list-item">
                                <p>{thisParent.state.data[item].name}</p>
                                <p>{thisParent.state.data[item].value}</p>
                            </li>
                        )
                    }
                    else return null
                })}
            </ul>

            <div className="app__button-container">
                <button onClick={thisParent.clickNav} data-direction="prev">précédent</button>
                <button onClick={thisParent.cancel}>annuler</button>
                <button onClick={thisParent.save}>enregistrer</button>
            </div>

        </div>
    )
}


const FormComplete = () => {

    return (
        <div>
            <p className="app__title-recap">Merci votre demande a bien été enregistrée !</p>
        </div>
    )
}


const Loader = () => {

    return (
        <div>
            <p>Loading</p>
        </div>
    )
}


class Formulaire extends Component {

    constructor() {
        super()

        this.state = {
            stage: 0,
            missingFields: [],
            data: {}
        }

        this.dbRoute = "http://localhost:3000/answers"
    }

    changeEvent = (e) => {
        const value = e.target.value
        const name = e.target.getAttribute("data-change-sentence")
        const id = e.target.getAttribute("data-change-name")

        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [id] : {
                    name: name,
                    value: value
                }
            }
        }))
    }

    clickNav = (e) => {
        e.preventDefault()

        // récupère la direction
        const direction = e.target.getAttribute("data-direction")

        if (direction === "prev") this.prev()
        else this.next()
    }

    prev() {

        this.setState({
            stage: this.state.stage - 1
        })
    }

    next() {
        // vérifie si tout les champs sont remplis
        let checkFields = this.checkFields()

        this.setState({
            stage: checkFields.length > 0 ? this.state.stage : this.state.stage + 1,
            missingFields: checkFields
        })
    }

    cancel = (e) => {
        e.preventDefault()

        // reset toutes les pripriétés
        this.setState({
            stage: 0,
            missingFields: [],
            data: {}
        })
    }

    save = (e) => {
        e.preventDefault()

        // lance loader
        this.setState({stage : "LOAD"})

        // récupère nos données dans le data que l'on nettoye
        const finalDatas = {}

        Object.keys(this.state.data).map((item) => {
            finalDatas[item] = this.state.data[item].value
            return null;
        })

        // envoi dans la db
        const xhr = new XMLHttpRequest()
        const DONE = 4
        const OK = 201

        xhr.open('POST', this.dbRoute)
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
        xhr.send(JSON.stringify(finalDatas))

        xhr.onreadystatechange = () => {

            if (xhr.readyState === DONE  ) {

                if (xhr.status === OK) {
                    this.setState({stage : 3})
                }
            }
        }
    }

    checkFields() {
        let missingFields = []

        // ce que l'on va vérifier
        const $form = document.getElementById("stage" + this.state.stage)
        const $requiredFields = $form.querySelectorAll(".app__label--required")

        // parcours tous nos input required dans le form du state correspondant
        this.setState({
            missingFields: []
        })

        switch (true) {

            case $form.getAttribute("data-check") === "radio" :

                let hasChecked = false

                // vérifie si le champs est rempli
                $requiredFields.forEach( ($element) => {

                    const toVerify = $element.getAttribute("for")
                    const isChecked = $element.querySelector("#"+toVerify).checked

                    if (!isChecked) {
                        missingFields.push(toVerify)
                    }
                    else {
                        hasChecked = true
                    }
                })

                if (hasChecked) missingFields = []

                break;

            case $form.getAttribute("data-check") === "input" :

                // vérifie si le champs est rempli
                $requiredFields.forEach( ($element) => {

                    const toVerify = $element.getAttribute("for")
                    const $toVerify = $element.querySelector("#"+toVerify)
                    const value = $toVerify.value.trim()
                    const type = $toVerify.getAttribute("type")

                    // vérifie si valeur est non nulle
                    if (value === "") {
                        missingFields.push(toVerify)
                    }

                    // verif si type mail
                    if (type === "email" && !Controller.isMail(value)) {
                        missingFields.push(toVerify)
                    }
                })

                break;

            default:
                console.error("no check provided")
        }

        return missingFields
    }

    render() {

        // défini quel écran est actif
        let currentForm = null

        switch (true) {
            case this.state.stage === 0 :
                currentForm = <Form0 missingFields={this.state.missingFields} thisParent={this}/>
                break

            case this.state.stage === 1 :
                currentForm = <Form1 missingFields={this.state.missingFields} thisParent={this}/>
                break

            case this.state.stage === 2 :
                currentForm = <Form2 thisParent={this}/>
                break

            case this.state.stage === 3 :
                currentForm = <FormComplete />
                break

            case this.state.stage === "LOAD" :
                currentForm = <Loader />
                break

            default:
                console.error("Pas de state defini")
                break
        }

        return (
            <form>

                <div className="form__stages-container">

                    {currentForm}

                </div>

            </form>
        )
    }
}


class App extends Component {

    render() {

        return (

            <div className="app">

                <header className="app__header">
                    <h1>formulaire étapes par étapes</h1>
                </header>

                <main className="app__main">

                    <Formulaire/>

                </main>

                <footer className="app__footer">
                    <p>projet react ECV digital - 2018</p>
                </footer>

            </div>
        );
    }
}

class Controller {

    static isMail(value) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
    }
}

export default App;