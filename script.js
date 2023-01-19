const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)

const data = {
    run: ["01-01", "01-02", "01-03"],
    water: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06"],
    food: ["01-01", , "01-03", , "01-05"],
    read: ["01-01", "01-02", "01-03"],
    sleep: ["01-01", "01-02", "01-05", "01-07"],
}

nlwSetup.setData(data)
nlwSetup.load()