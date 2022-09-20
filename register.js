(function () {
  var textFile = null, // The file we are going to write to
    makeTextFile = function (text) { // Create a text file
      var data = new Blob([text], { type: 'text/plain' }); // Create a blob of the text data passed by {text} param at the top of the function

      // If we are replacing a previously generated file we need to
      // manually revoke the object URL to avoid memory leaks.
      if (textFile !== null) { // If we have a file already
        window.URL.revokeObjectURL(textFile); // Revoke the old one - https://developer.mozilla.org/pt-BR/docs/Web/API/URL/revokeObjectURL
      }

      textFile = window.URL.createObjectURL(data);  // Create a new one

      return textFile; // Return the new file
    };


  var create = document.getElementById('create'),
    nameTextbox = document.getElementById('name-textbox'),
    emailTextbox = document.getElementById('email-textbox'),
    cpfTextbox = document.getElementById('cpf-textbox');

  create.addEventListener('click', function () {
    var link = document.createElement('a');
    link.setAttribute('download', 'info.txt');
    let breakline = '\n';
    link.href = makeTextFile(nameTextbox.value + breakline + emailTextbox.value + breakline + cpfTextbox.value);
    document.body.appendChild(link);

    // Wait for the link to be added to the document and then click it
    window.requestAnimationFrame(function () {
      var event = new MouseEvent('click');
      link.dispatchEvent(event);
      document.body.removeChild(link);
    });
  }, false);
})();
