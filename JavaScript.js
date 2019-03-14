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
            valoreFormsNFe = document.getElementById('CNPJRaizid').value * 40;
            valoreFormsEntryNFe = document.getElementById('CNPJFilialid').value * 40;
                if (document.getElementById('AgentDCid').checked == true){
                    valorQtdeAgentDC = 30;
}            
                if (document.getElementById('AgentDCid').checked == false){
                    valorQtdeAgentDC = document.getElementById('QtdeAgentDCid').value * 40;
}
            valorTotalEmissaoNFe = (valoreFormsNFe + valoreFormsEntryNFe + valorQtdeAgentDC) / 60 * 2;
  }
          if (document.getElementById('eForms_Entry_NFeid').checked == true){
            valoreFormsEntryNFe = document.getElementById('CNPJRaizid').value * 40;
            valorTotalEntryNFe = (valoreFormsEntryNFe) / 60 * 2;
  }
  valorTotalDevHMG = ((valorTotalEmissaoNFe/2) + (valorTotalEntryNFe/2) + valorHorasTesteIntegracaoHM + valorHorasTesteFluxoHM + valorHorasTesteUnitarioHM);
  valorTotalPRD = ((valorTotalEmissaoNFe/2) + (valorTotalEntryNFe/2) + valorHorasTesteFluxoPRD + valorHorasGoLive + valorHorasFollowUp);
  valorTotalExtratoNFe = (valorTotalEmissaoNFe + valorTotalEntryNFe + valorHorasIntegracao + valorHorasTesteIntegracaoHM + 
            valorHorasTesteFluxoHM + valorHorasTesteUnitarioHM + valorHorasTesteFluxoPRD + valorHorasGoLive + valorHorasFollowUp);
  alert("Tempo Total NFe " + valorTotalExtratoNFe + " horas.");
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

function ExibirQuadroTipoProdutos(){
    if (document.getElementById('NFeid').checked == false && document.getElementById('CTeid').checked == false && document.getElementById('MDFeid').checked == false){
       alert ("Selecione pelo menos 1 produto !");
            }else{
    document.getElementById('pQuadroConnectorNFeCTeMDFeid').style.display='block';
    document.getElementById('NFeid').disabled = true;
    document.getElementById('CTeid').disabled = true;
    document.getElementById('MDFeid').disabled = true;
    document.getElementById('btn_Ir_Para_Tipo_Produtosid').disabled = true;
            }

};

function ExibirNFe(){
    if (document.getElementById('NFeid').checked == true){
        /*document.getElementById('pQuadroConnectorNFeCTeMDFeid').style.display='block';*/
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
        /*document.getElementById('pQuadroConnectorNFeCTeMDFeid').style.display='block';*/
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
        /*document.getElementById('pQuadroConnectorNFeCTeMDFeid').style.display='block';*/
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

function VoltarSelecaoProdutos(){
    document.getElementById('pQuadroConnectorNFeCTeMDFeid').style.display='none';
    document.getElementById('pQuadroAmbientesid').style.display='none';
    document.getElementById('NFeid').disabled = false;
    document.getElementById('CTeid').disabled = false;
    document.getElementById('MDFeid').disabled = false;
    document.getElementById('btn_Ir_Para_Tipo_Produtosid').disabled = false;
    document.getElementById('eForms_NFeid').checked = false;
    document.getElementById('eForms_Entry_NFeid').checked = false;
    document.getElementById('eForms_CTeid').checked = false;
    document.getElementById('eForms_Entry_CTeid').checked = false;
    document.getElementById('eForms_MDFeid').checked = false;
    document.getElementById('eForms_Entry_MDFeid').checked = false;
    document.getElementById('DataCenterid').checked = false;
    document.getElementById('InLocoid').checked = false;
    document.getElementById('AgentDCid').checked = false;
    ExibirNFe();
    ExibirCTe();
    ExibirMDFe();
    document.getElementById('divQtdeAgentDCid').style.display='none';
    document.getElementById('divQtdeCNPJRaizid').style.display='none';
    document.getElementById('divQtdeCNPJFilialid').style.display='none';
    document.getElementById('QtdeAgentDCid').value="";
    document.getElementById('CNPJRaizid').value="";
    document.getElementById('CNPJFilialid').value="";
    document.getElementById('eForms_NFeid').disabled=false;
    document.getElementById('eForms_Entry_NFeid').disabled=false;
    document.getElementById('eForms_CTeid').disabled=false;
    document.getElementById('eForms_Entry_CTeid').disabled=false;
    document.getElementById('eForms_MDFeid').disabled=false;
    document.getElementById('eForms_Entry_MDFeid').disabled=false; 
    document.getElementById('btn_Enviar_ValidacaoInLocoid').disabled = false;
    document.getElementById('btn_Enviar_ValidacaoDCid').disabled = false;
    document.getElementById('QtdeAgentDCid').disabled = false;
};

function IrParaVolumetrias(){
    if (document.getElementById('eForms_NFeid').checked == false && document.getElementById('eForms_Entry_NFeid').checked == false
     && document.getElementById('eForms_CTeid').checked == false && document.getElementById('eForms_Entry_CTeid').checked == false 
     && document.getElementById('eForms_MDFeid').checked == false && document.getElementById('eForms_Entry_MDFeid').checked == false)
    {
       alert ("Selecione pelo menos 1 tipo de produto !");
            }else{
                document.getElementById('eForms_NFeid').disabled=true;
                document.getElementById('eForms_Entry_NFeid').disabled=true;
                document.getElementById('eForms_CTeid').disabled=true;
                document.getElementById('eForms_Entry_CTeid').disabled=true;
                document.getElementById('eForms_MDFeid').disabled=true;
                document.getElementById('eForms_Entry_MDFeid').disabled=true;
                /*document.getElementById('divSeparaVolumetriaEmiid').style.display='block';*/
                
    if (document.getElementById('eForms_NFeid').checked == true) {
        document.getElementById('divLabelVolumetriaEmiid').style.display='inline';
        document.getElementById('divVolumetriaEmiNFeid').style.display='inline';
    } 
    if (document.getElementById('eForms_Entry_NFeid').checked == true){
        document.getElementById('divLabelVolumetriaEmiid').style.display='inline';
        document.getElementById('divVolumetriaEntNFeid').style.display='inline';
    }
    if (document.getElementById('eForms_CTeid').checked == true){
        document.getElementById('divLabelVolumetriaEmiid').style.display='inline';
        document.getElementById('divVolumetriaEmiCTeid').style.display='inline';   
    } 
    if (document.getElementById('eForms_Entry_CTeid').checked == true){
        document.getElementById('divLabelVolumetriaEntid').style.display='inline';
        document.getElementById('divVolumetriaEntCTeid').style.display='inline';
    } 
    if (document.getElementById('eForms_MDFeid').checked == true){
        document.getElementById('divLabelVolumetriaEmiid').style.display='inline';
        document.getElementById('divVolumetriaEmiMDFeid').style.display='inline';
    } 
    if (document.getElementById('eForms_Entry_MDFeid').checked == true){
        document.getElementById('divLabelVolumetriaEntid').style.display='inline';
        document.getElementById('divVolumetriaEntMDFeid').style.display='inline';
    }   

    } 
};


function tableCreate() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');
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
        td.appendChild(document.createTextNode('   ' + 'Montagem da Integração'));
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
        td.appendChild(document.createTextNode('  ' + 'Instalação Ambiente DEV/HMG'));
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
        td.appendChild(document.createTextNode('   ' + 'Configuração Jobs HM'));
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
        td.appendChild(document.createTextNode('   ' + 'Instalação e-Agent DC HM'));
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
        td.appendChild(document.createTextNode('   ' + 'Testes de Integração HM'));
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
        td.appendChild(document.createTextNode('   ' + 'Testes de Fluxo HM'));
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
        td.appendChild(document.createTextNode('   ' + 'Testes Unitários HM'));
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
        td.appendChild(document.createTextNode('  ' + 'Instalação Ambiente PRD'));
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
        td.appendChild(document.createTextNode('   ' + 'Configuração Jobs PRD'));
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
        td.appendChild(document.createTextNode('   ' + 'Instalação e-Agent PRD'));
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
        td.appendChild(document.createTextNode('   ' + 'Testes de Fluxo PRD'));
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
        td.appendChild(document.createTextNode('   ' + 'Go Live'));
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
        td.appendChild(document.createTextNode('   ' + 'Follow Up'));
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