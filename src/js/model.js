class View {
    constructor(tag, className, parent) {
        const node = document.createElement(tag)
        node.className = className
        parent.append(node)
        this.node = node
    }
}

class Content extends View {
    card_one_number
    card_one_wrapDate_name
    card_one_wrapDate_mm
    card_one_wrapDate_yy
    card_two_cvc
    card_name_input
    card_number_input
    card_date_input_mm
    card_date_input_yy
    card_date_input_cvc
    button_conf
    constructor( tag, className, parent) {
        super(tag, className, parent) 
            const fon = new View("div", "fon", this.node)
            const content_wrap = new View("div", "content-block", this.node)
            const card_wrap = new View("div", "card-wrap", this.node)
            const card_one = new View("div", "card-one", card_wrap.node)
            const card_two = new View("div", "card-two", card_wrap.node)
            const card_one_wrapCircle = new View("div", "card-one-circle", card_one.node)
            const wrapCircle_one = new View("div", "card-one-circle__one", card_one_wrapCircle.node)
            const wrapCircle_two = new View("div", "card-one-circle__two", card_one_wrapCircle.node)
                this.card_one_number = new View("p", "card-one__number", card_one.node)
                this.card_one_number.node.textContent = "0000 0000 0000 0000";
            const card_one_wrapDate = new View("div", "card-one-date", card_one.node)
            this.card_one_wrapDate_name = new View("p", "card-one-date__name", card_one_wrapDate.node)
                this.card_one_wrapDate_name.node.textContent = "JANE APPLESED"
            const card_one_date = new View("div", "card-one-wrapDate", card_one_wrapDate.node)
            this.card_one_wrapDate_mm = new View("p", "card-one-date__mm", card_one_date.node)
                this.card_one_wrapDate_mm.node.textContent = "00"
            const card_one_wrapDate_slash = new View("p", "card-one-date__slash", card_one_date.node)
                card_one_wrapDate_slash.node.textContent = "/"
            this.card_one_wrapDate_yy = new View("p", "card-one-date__yy", card_one_date.node)
                this.card_one_wrapDate_yy.node.textContent = "00"
            this.card_two_cvc = new View("p", "card-one-date__cvc", card_two.node)
                this.card_two_cvc.node.textContent = "000"
            const card_name = new View("div", "card-name", content_wrap.node)
            const card_name_label = new View("label", "card-name__name", card_name.node)
                card_name_label.node.textContent = "CARDHOLDER NAME"
                card_name_label.node.setAttribute("for", "cardholder")
            this.card_name_input = new View("input", "card-name__input", card_name.node)
                this.card_name_input.node.setAttribute("type", "text")
                this.card_name_input.node.setAttribute("id", "cardholder")
            const card_number = new View("div", "card-number", content_wrap.node)
            const card_number_label = new View("label", "card-number__number", card_number.node)
                card_number_label.node.textContent = "CARD NUMBER"
                card_number_label.node.setAttribute("for", "number")
            this.card_number_input = new View("input", "card-number__input", card_number.node)
                this.card_number_input.node.setAttribute("type", "number")
                this.card_number_input.node.setAttribute("id", "number")    
            const card_date = new View("div", "card-date", content_wrap.node)
            const card_date_label = new View("label", "card-date__number", card_date.node)
                card_date_label.node.textContent = "EXP. DATE (MM/YY)"
                card_date_label.node.setAttribute("for", "date")
            this.card_date_input_mm = new View("input", "card-date__input", card_date.node)
            this.card_date_input_yy = new View("input", "card-date__input", card_date.node)
                this.card_date_input_mm.node.setAttribute("type", "number")
                this.card_date_input_mm.node.setAttribute("id", "date") 
                this.card_date_input_yy.node.setAttribute("type", "number")
                this.card_date_input_yy.node.setAttribute("id", "date")
            const card_date_label_cvc = new View("label", "card-date__cvc", card_date.node)
                card_date_label_cvc.node.textContent = "CVC"
                card_date_label_cvc.node.setAttribute("for", "cvc")
            this.card_date_input_cvc = new View("input", "card-date__input-cvc", card_date.node) 
                this.card_date_input_cvc.node.setAttribute("type", "number")
                this.card_date_input_cvc.node.setAttribute("id", "cvc") 
            this.button_conf = new View("button", "btn-conf", content_wrap.node)
                this.button_conf.node.textContent = "Confirm"
            
    }
}


class Controller  {
    constructor(model) {
        this.model = model
        const button_conf = this.model.button_conf.node
        const card_nameInput = this.model.card_name_input.node
        const card_name = this.model.card_one_wrapDate_name.node
        const card_numberInput = this.model.card_number_input.node
        const card_number = this.model.card_one_number.node
        const card_yyInput = this.model.card_date_input_mm.node
        const card_yy = this.model.card_one_wrapDate_yy.node
        const card_mmInput = this.model.card_date_input_yy.node
        const card_mm = this.model.card_one_wrapDate_mm.node
        const card_cvcInput = this.model.card_date_input_cvc.node
        const card_cvc = this.model.card_two_cvc.node
        button_conf.onclick = () => console.log("da")
        card_nameInput.oninput= () => {
            const name = card_name.value
            console.log(name)
        }
    }
}

const content = new Content("div", "wrapper", document.body)
const controller = new Controller(content)


