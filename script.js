function mostrar(alimento){

const resultado = document.getElementById("resultado");

if(alimento === "soja"){
resultado.innerHTML =
`
<h3>🌱 Soja</h3>
<p>
Plantio → Colheita → Armazenamento →
Transporte → Indústria → Supermercado → Consumidor
</p>
`;
}

if(alimento === "milho"){
resultado.innerHTML =
`
<h3>🌽 Milho</h3>
<p>
Plantio → Colheita → Cooperativa →
Transporte → Mercado → Consumidor
</p>
`;
}

if(alimento === "leite"){
resultado.innerHTML =
`
<h3>🥛 Leite</h3>
<p>
Ordenha → Resfriamento →
Laticínio → Transporte →
Mercado → Consumidor
</p>
`;
}

}