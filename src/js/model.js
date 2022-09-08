class View {
    constructor(tag, className, parent) {
        const node = document.createElement(tag)
        node.className = className
        parent.append(node)
        this.node = node
    }
}

class Content extends View {
    constructor(tag, className, parent) {
        super(tag, className, parent) 
            const fon = new View("div", "fon", this.node)
            const content_wrap = new View("div", "content-block", this.node)
            const card_wrap = new View("div", "card-wrap", this.node)
            const card_name = new View("div", "card-name", content_wrap.node)
            const card_name_label = new View("label", "card-name__name", card_name.node)
                card_name_label.node.textContent = "CARDHOLDER NAME"
                card_name_label.node.setAttribute("for", "cardholder")
            const card_name_input = new View("input", "card-name__input", card_name.node)
                card_name_input.node.setAttribute("type", "text")
                card_name_input.node.setAttribute("id", "cardholder")
            const card_number = new View("div", "card-number", content_wrap.node)
            const card_number_label = new View("label", "card-number__number", card_number.node)
                card_number_label.node.textContent = "CARD NUMBER"
                card_number_label.node.setAttribute("for", "number")
            const card_number_input = new View("input", "card-number__input", card_number.node)
                card_number_input.node.setAttribute("type", "number")
                card_number_input.node.setAttribute("id", "number")    
            const card_date = new View("div", "card-date", content_wrap.node)
            const card_date_label = new View("label", "card-date__number", card_date.node)
                card_date_label.node.textContent = "EXP. DATE (MM/YY)"
                card_date_label.node.setAttribute("for", "date")
            const card_date_input_mm = new View("input", "card-date__input", card_date.node)
            const card_date_input_yy = new View("input", "card-date__input", card_date.node)
                card_date_input_mm.node.setAttribute("type", "number")
                card_date_input_mm.node.setAttribute("id", "date") 
                card_date_input_yy.node.setAttribute("type", "number")
                card_date_input_yy.node.setAttribute("id", "date")
            const card_date_label_cvc = new View("label", "card-date__cvc", card_date.node)
                card_date_label_cvc.node.textContent = "CVC"
                card_date_label_cvc.node.setAttribute("for", "cvc")
            const card_date_input_cvc = new View("input", "card-date__input-cvc", card_date.node) 
                card_date_input_cvc.node.setAttribute("type", "number")
                card_date_input_cvc.node.setAttribute("id", "cvc") 
            const button_conf = new View("button", "btn-conf", content_wrap.node)
            button_conf.node.textContent = "Confirm"
    }
}

const content = new Content("div", "wrapper", document.body)