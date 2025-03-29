class CustomTable extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._table = document.createElement("table");
      this._shadowRoot.appendChild(this._table);
    }
  
    renderTable(data) {
      this._table.innerHTML = "";
  
      const thead = this._table.createTHead();
      const headerRow = thead.insertRow();
      Object.keys(data[0]).forEach(key => {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
      });
  
      const tbody = this._table.createTBody();
      data.forEach(row => {
        const tr = tbody.insertRow();
        Object.values(row).forEach(val => {
          const td = tr.insertCell();
          td.textContent = val;
        });
      });
    }
  }
  
  customElements.define("custom-table", CustomTable);
  