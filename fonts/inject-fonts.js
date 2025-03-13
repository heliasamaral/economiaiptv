// Script para injetar as fontes locais
document.addEventListener('DOMContentLoaded', function() {
  // Criar elemento link para o CSS
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/fonts/custom-fonts.css';
  
  // Adicionar ao cabeçalho
  document.head.appendChild(link);
  
  // Substituir URLs de fontes externas por locais
  var styleSheets = document.styleSheets;
  for (var i = 0; i < styleSheets.length; i++) {
    try {
      var cssRules = styleSheets[i].cssRules || styleSheets[i].rules;
      if (!cssRules) continue;
      
      for (var j = 0; j < cssRules.length; j++) {
        var rule = cssRules[j];
        
        // Verificar se é uma regra @font-face
        if (rule.type === CSSRule.FONT_FACE_RULE) {
          var src = rule.style.getPropertyValue('src');
          
          // Substituir URLs de fontes externas
          if (src.includes('ftplaytv.com.br')) {
            // Extrair o nome do arquivo da fonte
            var fontName = src.split('/').pop().split('.')[0];
            
            // Verificar qual fonte é
            if (src.includes('roboto-normal-latin-400')) {
              rule.style.setProperty('src', 'url("/fonts/roboto-normal-latin-400.woff2") format("woff2")', 'important');
            } else if (src.includes('roboto-normal-latin-500')) {
              rule.style.setProperty('src', 'url("/fonts/roboto-normal-latin-500.woff2") format("woff2")', 'important');
            } else if (src.includes('roboto-normal-latin-700')) {
              rule.style.setProperty('src', 'url("/fonts/roboto-normal-latin-700.woff2") format("woff2")', 'important');
            } else if (src.includes('poppins-normal-latin-300')) {
              rule.style.setProperty('src', 'url("/fonts/poppins-normal-latin-300.woff2") format("woff2")', 'important');
            } else if (src.includes('poppins-normal-latin-400')) {
              rule.style.setProperty('src', 'url("/fonts/poppins-normal-latin-400.woff2") format("woff2")', 'important');
            } else if (src.includes('poppins-normal-latin-600')) {
              rule.style.setProperty('src', 'url("/fonts/poppins-normal-latin-600.woff2") format("woff2")', 'important');
            }
          }
        }
      }
    } catch (e) {
      // Ignorar erros de CORS ao acessar folhas de estilo de outros domínios
      console.log('Erro ao processar folha de estilo:', e);
    }
  }
  
  console.log('Fontes locais injetadas com sucesso!');
}); 