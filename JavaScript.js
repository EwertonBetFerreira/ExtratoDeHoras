    var valoreFormsNFe = 0;
    var valoreFormsEntryNFe = 0;
    var valorTotalEmissaoNFe = 0;
    var valorTotalEntryNFe = 0; 
    var valorTotalExtratoNFe = 0;
    var valorQtdeAgentDC = 0;
    var valorHorasIntegracao = 24;
    var valorHorasTesteIntegracaoHM = 8;
    var valorHorasTesteFluxoHM = 4;
    var valorHorasTesteUnitarioHM = 12;
    var valorHorasTesteFluxoPRD = 4;
    var valorHorasGoLive = 4;
    var valorHorasFollowUp = 8;
    var valorHorasLegado = 0;
    var valorHorasDemandas = 0;
    var valorTotalDevHMG = 0;
    var valorTotalPRD = 0;

 function EnviarDC() {
  if (document.getElementById('DataCenterid').checked == false){
    if (document.getElementById('InLocoid').checked == false){
    alert("Selecione o tipo de ambiente");
  }
}else{

        if (document.getElementById('eForms_NFeid').checked == true){
            Math.round(valoreFormsNFe = document.getElementById('CNPJRaizid').value * 40);
            Math.round(valoreFormsEntryNFe = document.getElementById('CNPJFilialid').value * 40);
                if (document.getElementById('AgentDCid').checked == true){
                    valorQtdeAgentDC = 30;
}            
                if (document.getElementById('AgentDCid').checked == false){
                    Math.round(valorQtdeAgentDC = document.getElementById('QtdeAgentDCid').value * 40);
}
            Math.round(valorTotalEmissaoNFe = (valoreFormsNFe + valoreFormsEntryNFe + valorQtdeAgentDC) / 60 * 2);
  }
          if (document.getElementById('eForms_Entry_NFeid').checked == true){
            Math.round(valoreFormsEntryNFe = document.getElementById('CNPJRaizid').value * 40);
            Math.round(valorTotalEntryNFe = (valoreFormsEntryNFe) / 60 * 2);
  }
  valorTotalDevHMG =Math.round(((valorTotalEmissaoNFe/2) + (valorTotalEntryNFe/2) + valorHorasTesteIntegracaoHM + valorHorasTesteFluxoHM + valorHorasTesteUnitarioHM));
  valorTotalPRD = Math.round(((valorTotalEmissaoNFe/2) + (valorTotalEntryNFe/2) + valorHorasTesteFluxoPRD + valorHorasGoLive + valorHorasFollowUp));
  valorTotalExtratoNFe = Math.round((valorTotalEmissaoNFe + valorTotalEntryNFe + valorHorasIntegracao + valorHorasTesteIntegracaoHM + 
            valorHorasTesteFluxoHM + valorHorasTesteUnitarioHM + valorHorasTesteFluxoPRD + valorHorasGoLive + valorHorasFollowUp));
  alert("Tempo Total NFe " + Math.round(valorTotalExtratoNFe) + " horas.");
}
};

 function EnviarInLoco() {
  if (document.getElementById('DataCenterid').checked == false){
    if (document.getElementById('InLocoid').checked == false){
    alert("Selecione o tipo de ambiente");
  }
}
};

 function desabilitarInLoco() {
  if (document.getElementById('DataCenterid').checked == true){
    if (document.getElementById('InLocoid').checked == false){
    document.getElementById('btn_Enviar_ValidacaoInLocoid').disabled = true;
    document.getElementById('btn_Enviar_ValidacaoDCid').disabled = false;
  }
}
  if (document.getElementById('DataCenterid').checked == false){
    if (document.getElementById('InLocoid').checked == false){
    document.getElementById('btn_Enviar_ValidacaoInLocoid').disabled = false;
    document.getElementById('btn_Enviar_ValidacaoDCid').disabled = false;
  }
}
  if (document.getElementById('DataCenterid').checked == true){
    if (document.getElementById('InLocoid').checked == true){
    document.getElementById('btn_Enviar_ValidacaoDCid').disabled = false;
    document.getElementById('btn_Enviar_ValidacaoInLocoid').disabled = false;
  }
}
  if (document.getElementById('DataCenterid').checked == false){
    if (document.getElementById('InLocoid').checked == true){
    document.getElementById('btn_Enviar_ValidacaoDCid').disabled = true;
    document.getElementById('btn_Enviar_ValidacaoInLocoid').disabled = false;
  }
}
};

 function desabilitarDC() {
  if (document.getElementById('DataCenterid').checked == false){
    if (document.getElementById('InLocoid').checked == true){
    document.getElementById('btn_Enviar_ValidacaoDCid').disabled = true;
    document.getElementById('btn_Enviar_ValidacaoInLocoid').disabled = false;
  }
}
  if (document.getElementById('DataCenterid').checked == false){
    if (document.getElementById('InLocoid').checked == false){
    document.getElementById('btn_Enviar_ValidacaoDCid').disabled = false;
    document.getElementById('btn_Enviar_ValidacaoInLocoid').disabled = false;
  }
}
  if (document.getElementById('DataCenterid').checked == true){
    if (document.getElementById('InLocoid').checked == true){
    document.getElementById('btn_Enviar_ValidacaoDCid').disabled = false;
    document.getElementById('btn_Enviar_ValidacaoInLocoid').disabled = false;
  }
}
  if (document.getElementById('DataCenterid').checked == true){
    if (document.getElementById('InLocoid').checked == false){
    document.getElementById('btn_Enviar_ValidacaoDCid').disabled = false;
    document.getElementById('btn_Enviar_ValidacaoInLocoid').disabled = true;
  }
}
};

function desabilitarQtdeAgentDC() {
    if (document.getElementById('AgentDCid').checked == true){
        document.getElementById('QtdeAgentDCid').disabled = true;
}
    if (document.getElementById('AgentDCid').checked == false){
        document.getElementById('QtdeAgentDCid').disabled = false;
}
};

function ExibirQuadroTipoProdutosNFeCTeMDFe(){
    document.getElementById('eForms_NFeLabelid').style.display='inline';
    document.getElementById('eForms_Entry_NFeLabelid').style.display='inline';  
    document.getElementById('eForms_CTeLabelid').style.display='inline';
    document.getElementById('eForms_EntryCTeLabelid').style.display='inline'; 
    document.getElementById('eForms_MDFeLabelid').style.display='inline';
    document.getElementById('eForms_EntryMDFeLabelid').style.display='inline';       
    document.getElementById('pQuadroConnectorNFeCTeMDFeid').style.display='table';
    document.getElementById('btn_Ir_Para_Tipo_ProdutosNFeCTeMDFeid').disabled = true;          
};

/*FUNÇÕES QUE VALIDAVAM OS ANTIGOS CHECKS DE PRODUTOS
function ExibirNFe(){
    if (document.getElementById('NFeid').checked == true){
        
        document.getElementById('eForms_NFeLabelid').style.display='inline';
        document.getElementById('eForms_Entry_NFeLabelid').style.display='inline';
}
    if (document.getElementById('NFeid').checked == false){
        document.getElementById('eForms_NFeLabelid').style.display='none';
        document.getElementById('eForms_Entry_NFeLabelid').style.display='none';
        document.getElementById('eForms_NFeid').checked = false;
        document.getElementById('eForms_Entry_NFeid').checked = false;
        }
    if (document.getElementById('NFeid').checked == false){
        if (document.getElementById('CTeid').checked == false){
            if (document.getElementById('MDFeid').checked == false){
        document.getElementById('pQuadroConnectorNFeCTeMDFeid').style.display='none';
        document.getElementById('eForms_NFeLabelid').style.display='none';
        document.getElementById('eForms_Entry_NFeLabelid').style.display='none';
}
        }
            }
};

function ExibirCTe(){
    if (document.getElementById('CTeid').checked == true){
        
        document.getElementById('eForms_CTeLabelid').style.display='inline';
        document.getElementById('eForms_EntryCTeLabelid').style.display='inline';
}
    if (document.getElementById('CTeid').checked == false){
        document.getElementById('eForms_CTeLabelid').style.display='none';
        document.getElementById('eForms_EntryCTeLabelid').style.display='none';
        document.getElementById('eForms_CTeid').checked = false;
        document.getElementById('eForms_Entry_CTeid').checked = false;
    }

    if (document.getElementById('CTeid').checked == false){
        if (document.getElementById('NFeid').checked == false){
            if (document.getElementById('MDFeid').checked == false){        
        document.getElementById('pQuadroConnectorNFeCTeMDFeid').style.display='none';
        document.getElementById('eForms_CTeLabelid').style.display='none';
        document.getElementById('eForms_EntryCTeLabelid').style.display='none';
}
        }
            }
};

function ExibirMDFe(){
    if (document.getElementById('MDFeid').checked == true){
        
        document.getElementById('eForms_MDFeLabelid').style.display='inline';
        document.getElementById('eForms_EntryMDFeLabelid').style.display='inline';
}
    if (document.getElementById('MDFeid').checked == false){
        document.getElementById('eForms_MDFeLabelid').style.display='none';
        document.getElementById('eForms_EntryMDFeLabelid').style.display='none';
        document.getElementById('eForms_MDFeid').checked = false;
        document.getElementById('eForms_Entry_MDFeid').checked = false;        
    }

    if (document.getElementById('MDFeid').checked == false){
        if (document.getElementById('CTeid').checked == false){
            if (document.getElementById('NFeid').checked == false){        
        document.getElementById('pQuadroConnectorNFeCTeMDFeid').style.display='none';
        document.getElementById('eForms_MDFeLabelid').style.display='none';
        document.getElementById('eForms_EntryMDFeLabelid').style.display='none';
}
        }
            }
};
*/

/*VOLTAR PARA A EDIÇÃO DA SELEÇÃO DE PRODUTOS E ZERA OS DADOS QUE FORAM MARCADOS NOS TIPOS DE PRODUTOS*/
function VoltarSelecaoProdutosNFeCTeMDFe(){
    document.getElementById('pQuadroConnectorNFeCTeMDFeid').style.display='none';
    document.getElementById('pQuadroAmbientesid').style.display='none';
    document.getElementById('btn_Ir_Para_Tipo_ProdutosNFeCTeMDFeid').disabled = false;
    document.getElementById('eForms_NFeid').checked = false;
    document.getElementById('eForms_Entry_NFeid').checked = false;
    document.getElementById('eForms_CTeid').checked = false;
    document.getElementById('eForms_Entry_CTeid').checked = false;
    document.getElementById('eForms_MDFeid').checked = false;
    document.getElementById('eForms_Entry_MDFeid').checked = false;
    document.getElementById('eForms_NFeid').disabled=false;
    document.getElementById('eForms_Entry_NFeid').disabled=false;
    document.getElementById('eForms_CTeid').disabled=false;
    document.getElementById('eForms_Entry_CTeid').disabled=false;
    document.getElementById('eForms_MDFeid').disabled=false;
    document.getElementById('eForms_Entry_MDFeid').disabled=false; 
};

/*EXIBE O QUADRO PARA INFORMAR AS VOLUMETRIAS*/
function IrParaVolumetrias(){

    /*VERIFICA SE PELO MENOS 1 CHECKBOX FOI SELECIONADO*/
    if (document.getElementById('eForms_NFeid').checked == false && document.getElementById('eForms_Entry_NFeid').checked == false
     && document.getElementById('eForms_CTeid').checked == false && document.getElementById('eForms_Entry_CTeid').checked == false 
     && document.getElementById('eForms_MDFeid').checked == false && document.getElementById('eForms_Entry_MDFeid').checked == false)
    {
       alert ("Selecione pelo menos 1 tipo de produto !");
            /*MONTA O QUADRO DE VOLUMETRIAS*/
            }else{
                  /*DESABILITA OS BOTÕES DE VOLTAR PARA SELAÇAO DE PRODUTOS E IR PARA VOLUMETRIAS*/
                document.getElementById('btn_Voltar_Selecao_ProdutosNFeCTeMDFeid').disabled = true;
                document.getElementById('btn_Ir_Volumetriasid').disabled = true;
                /*DESABILITA OS CHECKS DE TIPOS DE PRODUTO*/
                document.getElementById('eForms_NFeid').disabled=true;
                document.getElementById('eForms_Entry_NFeid').disabled=true;
                document.getElementById('eForms_CTeid').disabled=true;
                document.getElementById('eForms_Entry_CTeid').disabled=true;
                document.getElementById('eForms_MDFeid').disabled=true;
                document.getElementById('eForms_Entry_MDFeid').disabled=true;
                document.getElementById("divSeparaTipoVolumetriaid").style.display='block';

                /*MOSTRA OS DOIS QUADROS O DE EMISSÃO E O DE ENTRADA*/
                document.getElementById('divQuadroVolumetriaEmiid').style.visibility='visible';
                document.getElementById('divQuadroVolumetriaEntid').style.visibility='visible';
                document.getElementById('divLabelVolumetriaEmiid').style.visibility='visible';
                document.getElementById('divVolumetriaEmiNFeid').style.visibility='visible';
                document.getElementById('divLabelVolumetriaEntid').style.visibility='visible';
                document.getElementById('divVolumetriaEntNFeid').style.visibility='visible';
                document.getElementById('divVolumetriaEmiCTeid').style.visibility='visible';
                document.getElementById('divVolumetriaEntCTeid').style.visibility='visible'; 
                document.getElementById('divVolumetriaEmiMDFeid').style.visibility='visible';
                document.getElementById('divVolumetriaEntMDFeid').style.visibility='visible';
     
                  /*VERIFICA QUAIS INPUTS DEVE HABILITAR PARA O USUÁRIO PREENCHER DE ACORDO COM OS CHECKS DO TIPO DE PRODUTO*/            
                  if (document.getElementById('eForms_NFeid').checked == true) {
                      document.getElementById('VolumetriaEmiNFeid').disabled=false;
                      document.getElementById('VolumetriaEmiNFeid').name='true';
                  }else{
                      document.getElementById('VolumetriaEmiNFeid').disabled=true;
                  }
                  if (document.getElementById('eForms_Entry_NFeid').checked == true){
                      document.getElementById('VolumetriaEntNFeid').disabled=false;        
                  }else{
                      document.getElementById('VolumetriaEntNFeid').disabled=true;        
                  }
                  if (document.getElementById('eForms_CTeid').checked == true){
                      document.getElementById('VolumetriaEmiCTeid').disabled=false;  
                  }else{
                    document.getElementById('VolumetriaEmiCTeid').disabled=true;  
                  }
                  if (document.getElementById('eForms_Entry_CTeid').checked == true){
                      document.getElementById('VolumetriaEntCTeid').disabled=false;        
                  }else{
                      document.getElementById('VolumetriaEntCTeid').disabled=true;        
                  } 
                  if (document.getElementById('eForms_MDFeid').checked == true){
                      document.getElementById('VolumetriaEmiMDFeid').disabled=false;        
                  }else{
                      document.getElementById('VolumetriaEmiMDFeid').disabled=true;        
                  }
                  if (document.getElementById('eForms_Entry_MDFeid').checked == true){        
                      document.getElementById('VolumetriaEntMDFeid').disabled=false;     
                  }else{
                      document.getElementById('VolumetriaEntMDFeid').disabled=true;     
                  }   
                  document.getElementById('btn_Voltar_Tipo_Produtosid').style.display='inline';
                  document.getElementById('btn_Ir_Para_CNPJid').style.display='inline';
                  
    } 
};

/*VOLTA PARA A EDIÇÃO DOS TIPOS DE PRODUTOS E ZERA OS DADOS QUE FORAM PREENCHIDOS NAS VOLUMETRIAS*/
function VoltarTipoProdutos(){
  document.getElementById('VolumetriaEmiNFeid').value='';
  document.getElementById('VolumetriaEmiCTeid').value='';
  document.getElementById('VolumetriaEmiMDFeid').value='';
  document.getElementById('VolumetriaEntNFeid').value='';
  document.getElementById('VolumetriaEntCTeid').value='';
  document.getElementById('VolumetriaEntMDFeid').value='';
  document.getElementById('divQuadroVolumetriaEmiid').style.visibility='hidden';
  document.getElementById('divQuadroVolumetriaEntid').style.visibility='hidden';
  document.getElementById('divLabelVolumetriaEmiid').style.visibility='hidden';
  document.getElementById('divVolumetriaEmiNFeid').style.visibility='hidden';
  document.getElementById('divLabelVolumetriaEntid').style.visibility='hidden';
  document.getElementById('divVolumetriaEntNFeid').style.visibility='hidden';
  document.getElementById('divVolumetriaEmiCTeid').style.visibility='hidden';
  document.getElementById('divVolumetriaEntCTeid').style.visibility='hidden'; 
  document.getElementById('divVolumetriaEmiMDFeid').style.visibility='hidden';
  document.getElementById('divVolumetriaEntMDFeid').style.visibility='hidden';  
  document.getElementById('btn_Voltar_Selecao_ProdutosNFeCTeMDFeid').disabled = false;
  document.getElementById('btn_Ir_Volumetriasid').disabled = false; 
  document.getElementById('btn_Voltar_Tipo_Produtosid').style.display = 'none'; 
  document.getElementById('btn_Ir_Para_CNPJid').style.display = 'none'; 
  document.getElementById('eForms_NFeid').disabled=false;
  document.getElementById('eForms_Entry_NFeid').disabled=false;
  document.getElementById('eForms_CTeid').disabled=false;
  document.getElementById('eForms_Entry_CTeid').disabled=false;
  document.getElementById('eForms_MDFeid').disabled=false;
  document.getElementById('eForms_Entry_MDFeid').disabled=false; 
  document.getElementById('VolumetriaEmiNFeid').readOnly = false;
  document.getElementById('VolumetriaEmiCTeid').readOnly = false;
  document.getElementById('VolumetriaEmiMDFeid').readOnly = false;
  document.getElementById('VolumetriaEntNFeid').readOnly = false;
  document.getElementById('VolumetriaEntCTeid').readOnly = false;
  document.getElementById('VolumetriaEntMDFeid').readOnly = false; 
}

function IrParaCNPJ(){
   if((document.getElementById('VolumetriaEmiNFeid').disabled == false && document.getElementById('VolumetriaEmiNFeid').value =='') ||
     (document.getElementById('VolumetriaEntNFeid').disabled == false && document.getElementById('VolumetriaEntNFeid').value =='') ||
     (document.getElementById('VolumetriaEmiCTeid').disabled == false && document.getElementById('VolumetriaEmiCTeid').value =='') ||
     (document.getElementById('VolumetriaEntCTeid').disabled == false && document.getElementById('VolumetriaEntCTeid').value =='') ||
     (document.getElementById('VolumetriaEmiMDFeid').disabled == false && document.getElementById('VolumetriaEmiMDFeid').value =='') || 
     (document.getElementById('VolumetriaEntMDFeid').disabled == false && document.getElementById('VolumetriaEntMDFeid').value ==''))
  {
      alert ("Preencha a volumetria dos produtos selecionados !");
  }else{
  document.getElementById("divSeparaVolumetriaCNPJid").style.display='block';    
  document.getElementById('divQtdeCNPJRaizid').style.display='block';
  document.getElementById('divQtdeCNPJFilialid').style.display='block';
  document.getElementById('VolumetriaEmiNFeid').readOnly = true;
  document.getElementById('VolumetriaEmiCTeid').readOnly = true;
  document.getElementById('VolumetriaEmiMDFeid').readOnly = true;
  document.getElementById('VolumetriaEntNFeid').readOnly = true;
  document.getElementById('VolumetriaEntCTeid').readOnly = true;
  document.getElementById('VolumetriaEntMDFeid').readOnly = true;  
  document.getElementById('btn_Finalizar_NFeCTeMDFeid').style.display='inline';
  
  document.getElementById('btn_Voltar_Para_Volumetriaid').style.display='inline';
  document.getElementById('btn_Ir_Para_CNPJid').disabled= true;
  document.getElementById('btn_Voltar_Tipo_Produtosid').disabled= true;
  }
}

function VoltarVolumetria(){
  document.getElementById('divQtdeCNPJRaizid').style.display='none';
  document.getElementById('divQtdeCNPJFilialid').style.display='none';
  document.getElementById('CNPJFilialid').value='';
  document.getElementById('CNPJRaizid').value=''; 
  document.getElementById('btn_Finalizar_NFeCTeMDFeid').style.display='none';
  document.getElementById('btn_Ir_Para_Ambienteid').style.display='none';
  document.getElementById('btn_Voltar_Para_Volumetriaid').style.display='none'; 
  document.getElementById('VolumetriaEmiNFeid').readOnly = false;
  document.getElementById('VolumetriaEmiCTeid').readOnly = false;
  document.getElementById('VolumetriaEmiMDFeid').readOnly = false;
  document.getElementById('VolumetriaEntNFeid').readOnly = false;
  document.getElementById('VolumetriaEntCTeid').readOnly = false;
  document.getElementById('VolumetriaEntMDFeid').readOnly = false;
  document.getElementById('btn_Ir_Para_CNPJid').disabled= false;
  document.getElementById('btn_Voltar_Tipo_Produtosid').disabled= false;
  document.getElementById('CNPJRaizid').readOnly = false;
  document.getElementById('CNPJFilialid').readOnly = false;

}

function FinalizarNFeCTeMDFe(){
  if((document.getElementById('CNPJRaizid').value=='') || (document.getElementById('CNPJFilialid').value=='')){
    alert("Preencha as informações de CNPJ Raiz e Filial !")
  }else{
  document.getElementById('pQuadroAmbientesid').style.display='block';
  document.getElementById('divAmbientesid').style.display='block';
  document.getElementById('divQtdeAgentDCid').style.display='block';
  document.getElementById('CheckAgentCentralizadoid').style.display='block';
  document.getElementById('divBotoesGerarExtratoid').style.display='block';
  document.getElementById('CNPJRaizid').readOnly = true;
  document.getElementById('CNPJFilialid').readOnly = true;
  }
}


function IrParaAmbiente(){
  if((document.getElementById('CNPJRaizid').value=='') || (document.getElementById('CNPJFilialid').value=='')){
    alert("Preencha as informações de CNPJ Raiz e Filial !")
  }else{
  document.getElementById('pQuadroAmbientesid').style.display='block';
  document.getElementById('divAmbientesid').style.display='block';
  document.getElementById('divQtdeAgentDCid').style.display='block';
  document.getElementById('CheckAgentCentralizadoid').style.display='block';
  document.getElementById('divBotoesGerarExtratoid').style.display='block';
  document.getElementById('CNPJRaizid').readOnly = true;
  document.getElementById('CNPJFilialid').readOnly = true;
  }
}

/*EXTRAI DO HTML PARA O CSV*/
function ExportCSV () {
  var table = document.getElementById('TabelaExtrato').innerHTML;
  var data = table.replace(/<thead>/g, '')
                  .replace(/<\/thead>/g, '')
                  .replace(/<tbody>/g, '')
                  .replace(/<\/tbody>/g, '')
                  .replace(/<tr>/g, '')
                  .replace(/<\/tr>/g, '\r\n')
                  .replace(/<tr id="tr1">/g, '')
                  .replace(/<tr id="tr2">/g, '')
                  .replace(/<tr id="tr3">/g, '')
                  .replace(/<tr id="tr4">/g, '')
                  .replace(/<tr id="tr5">/g, '')
                  .replace(/<tr id="tr6">/g, '')
                  .replace(/<tr id="tr7">/g, '')
                  .replace(/<tr id="tr8">/g, '')
                  .replace(/<tr id="tr9">/g, '')
                  .replace(/<tr id="tr10">/g, '')
                  .replace(/<tr id="tr11">/g, '')
                  .replace(/<tr id="tr12">/g, '')
                  .replace(/<tr id="tr13">/g, '')
                  .replace(/<tr id="tr14">/g, '')
                  .replace(/<tr id="tr15">/g, '')
                  .replace(/<tr id="tr16">/g, '')
                  .replace(/<tr id="tr17">/g, '')
                  .replace(/<th>/g, '')
                  .replace(/<\/th>/g, ';')
                  .replace(/<td>/g, '')
                  .replace(/<\/td>/g, ';')
                  .replace(/\t/g, '')
                  .replace(/\n/g, '')
                  .replace(/&nbsp/gi, '');
var mylink = document.createElement('a');
mylink.download = "Extrato de Horas.csv";
mylink.href = "data:application/csv," + escape(data);
mylink.click();                  
}


/*MONTA A TABELA DO EXTRATO DE HORAS*/
function tableCreate() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');
  tbl.setAttribute('id', 'TabelaExtrato');
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr1");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Nome da Tarefa'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Quantidade de Horas'));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr2");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('e-Forms DC'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(valorTotalExtratoNFe.toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }  
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr3");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Montagem da Integração'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(valorHorasIntegracao.toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }  
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr4");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Instalação Ambiente DEV/HMG'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(valorTotalDevHMG.toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }  
    for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr5");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Configuração Jobs HM'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(((valoreFormsNFe + valoreFormsEntryNFe)/60).toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }
    for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr6");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Instalação e-Agent DC HM'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode((valorQtdeAgentDC/60).toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }  
    for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr7");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Testes de Integração HM'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(valorHorasTesteIntegracaoHM.toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }
      for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr8");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Testes de Fluxo HM'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(valorHorasTesteFluxoHM.toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }
      for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr9");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Testes Unitários HM'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(valorHorasTesteUnitarioHM.toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }  
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr10");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Instalação Ambiente PRD'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(valorTotalPRD.toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }  
      for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr11");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Configuração Jobs PRD'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(((valoreFormsNFe + valoreFormsEntryNFe)/60).toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }
      for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr12");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Instalação e-Agent PRD'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode((valorQtdeAgentDC/60).toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }
       for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr13");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Testes de Fluxo PRD'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(valorHorasTesteFluxoPRD.toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }
      for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr14");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Go Live'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(valorHorasGoLive.toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }
    for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr15");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Follow Up'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(valorHorasFollowUp.toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  } 
    for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr16");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Importação de Legado'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(valorHorasLegado.toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  } 
    for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr17");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Demandas'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(valorHorasDemandas.toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }   
  tbl.appendChild(tbdy);
  body.appendChild(tbl);
};

/*MONTA O EXTRATO SIMPLIFICADO */
function SimpleTableCreate() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');  
  tbl.setAttribute('border', '1');
  tbl.setAttribute('id', 'TabelaExtratoSimples');
  var tbdy = document.createElement('tbody');

  for (var i = 0; i < 1; i++) {
    var th = document.createElement('th');
    th.setAttribute("id","thsimple");
    for (var j = 0; j < 1; j++) {
        var tr = document.createElement('tr');
        tr.setAttribute("id", "tr0simple1");
        th.appendChild(tr);
    }
    for (var j = 0; j < 1; j++) {
      var td = document.createElement('td');
      td.setAttribute("id", "td0simple1", "colspan = '2'");
      td.appendChild(document.createTextNode('TOTAL - Extrato de Horas Simplificado'));
      tr.appendChild(td);
  }
  tbdy.appendChild(th);
  }
    
  

  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr1simple");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.setAttribute("id", "td1simple1");
        td.appendChild(document.createTextNode('Nome da Tarefa'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.setAttribute("id", "td1simple2");
        td.appendChild(document.createTextNode('Duração em Horas'));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }

  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr2simple");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.setAttribute("id", "td2simple1");
        td.appendChild(document.createTextNode('Estimativa de Horas'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.setAttribute("id", "td2simple2");
        td.appendChild(document.createTextNode(valorTotalExtratoNFe.toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }  

  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr3simple");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Coordenador de Projeto'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.setAttribute("id", "td3simple2");
        td.appendChild(document.createTextNode(valorHorasIntegracao.toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }  

  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr4simple");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Integração'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.setAttribute("id", "td4simple2");
        td.appendChild(document.createTextNode(valorTotalDevHMG.toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }  

    for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr5simple");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Instalação Ambiente DEV/HMG'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.setAttribute("id", "td5simple2");
        td.appendChild(document.createTextNode(Math.round(((valoreFormsNFe + valoreFormsEntryNFe)/60)).toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }

    for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr6simple");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Instalação Ambiente PRD'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.setAttribute("id", "td6simple2");
        td.appendChild(document.createTextNode((valorQtdeAgentDC/60).toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }  

    for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr7simple");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Demandas/Customizações'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.setAttribute("id", "td7simple2");
        td.appendChild(document.createTextNode(valorHorasTesteIntegracaoHM.toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }

      for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("id","tr8simple");
    for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Importação de Legado'));
        tr.appendChild(td);
    }
        for (var j = 0; j < 1; j++) {
        var td = document.createElement('td');
        td.setAttribute("id", "td8simple2");
        td.appendChild(document.createTextNode(valorHorasTesteFluxoHM.toString()));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }  
  tbl.appendChild(tbdy);
  body.appendChild(tbl);
};