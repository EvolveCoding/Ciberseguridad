

document.addEventListener("DOMContentLoaded", load, false);

function load() {
    var titulo = '';
    var image = '';
    var subtitulo = '';
    var info1 = '';
    var info2 = '';
    var caption = '';
    var item = localStorage.getItem('item'); 
    if(item){
            switch(item){
                case 'item1': 
                        titulo = 'Phishing';
                        subtitulo = 'Suplantación de identidad';
                        info1 = 'Es una técnica de ingeniería social que usan los ciberdelincuentes para obtener información confidencial de los usuarios de forma fraudulenta y así apropiarse de la identidad de esas personas.';
                        info1 += 'Los ciberdelincuentes desean obtener: datos de contraseñas, números de tarjetas de crédito, DNI,CUIT o CUIL,nombres de usuario,\
                                  códigos PIN. Cuando obtienen estos datos realizan compras, reservas o extracciones de dinero en tu nombre.';
                        info2 = 'Para saber si los mensajes o correos electrónicos son un intento de phishing es necesario prestar atención a los detalles como por\
                                 ejemplo: correos o mensajes de WhatsApp enviados por remitentes desconocidos, el uso de remitentes parecidos a los de las\
                                páginas oficiales y legales, faltas de ortografía: errores gramaticales y ortográficos, la falta de acentos o diéresis o \
                                la presencia de caracteres en otros idiomas, la presencia de enlaces y links dudosos, el tono del correo electrónico: \
                                las empresas se dirigen a sus clientes en tono cálido y personal, en general te llaman por tu nombre porque tus datos ya \
                                figuran en sus bases de datos, el objetivo del correo: ningún proveedor de servicios en línea le pide a sus clientes\
                                la introducción de datos por medio del correo electrónico. En caso de dudas, es recomendable no hacer clic sobre el enlace ni tampoco escribir manualmente la dirección en el navegador. ';
                        caption = 'Una forma de verificar si fuiste víctima de una ataque de phishing es revisar en forma periódica tus resúmenes bancarios buscando transferencias que no autorizaste.';
                        image = '../assets/'+item+'.jpg';
                        break;
                case 'item2': 
                        titulo = 'Grooming';
                        subtitulo = '';
                        info1 = 'Representa una serie de conductas deliberadamente emprendidas por una persona con el objetivo de contactar a un niño, niña y/o adolescente y así ganarse su confianza, estableciendo un vínculo emocional a fin de disminuir sus inhibiciones para luego generar un encuentro personal en el mundo físico, o bien, como en la mayoría de los casos, obtener el material de contenido sexual por parte de la víctima para su comercialización, distribución y/o para satisfacer su perversidad sexual.';
                        info2 = 'La persona acosadora suele crear un perfil falso en redes sociales, aplicaciones, videojuegos multijugador u otro medio social.\
                                Se hace pasar por una persona menor de edad para generar confianza y tener una relación de amistad con niñas,\
                                niños o adolescentes. Luego, la persona acosadora le pide a la víctima fotos o videos con contenido sexual, cuando lo consigue,\
                                chantajea y amenaza a la niña, el niño o el adolescente con hacer público ese material si no envía nuevas fotos o videos o si no \
                                acepta un encuentro personal.La posición de poder en la que se encuentra la persona acosadora se refuerza por su adultez y por \
                                la vergüenza que siente la niña, niño o adolescente al enterarse de que se expuso ante alguien más grande que puede hacer público \
                                el material privado. Si la persona acosadora logró una relación de confianza, puede que los niños, niñas o adolescentes accedan \
                                a un encuentro personal.  En otras ocasiones, la persona acosadora obtiene fotos o videos sexuales \
                                de la víctima sin necesidad de contacto previo, mediante el robo de contraseñas, hackeo de dispositivos o de cuentas. \
                                Posteriormente, inicia el período de chantaje. ';
                        caption = 'Se debe prestar atención a los cambios de conducta o humor de la niña, el niño o el adolescente: si presenta repentina tristeza, baja su rendimiento escolar o quiere estar sola/o, si se observa nerviosismo, o ansiedad respecto del uso de los dispositivos (por ejemplo en el caso de estar siendo amenazada/o y debe responder a los mensajes).';
                        image = '../assets/'+item+'.jpg';
                        break; 
                case 'item3': 
                        titulo = 'Stalking';
                        subtitulo = '';
                        info1 = 'El stalking o acecho es el término usado para referirse al trastorno que tiene una persona que lo lleva a espiar a su víctima. \
                                Principalmente, el stalking se da en redes sociales como Facebook, Instagram o Twitter, por servicios de mensajería instantánea \
                                como WhatsApp.';
                        info2 = 'Para prevenir el stalking evitá dar tu información personal, como correos electrónicos o números de teléfono, a desconocidos.\
                                 No aceptes personas extrañas en tus redes sociales. Configurá la privacidad de tus redes sociales, según los intereses que \
                                 consideres necesarios. Sé precavido con las cosas que publicás en internet.';
                        caption = 'Ten en cuenta que las fotografías son una de las formas de llamar la atención sin quererlo. \
                                   Después de que publicás una imagen en internet, cientos de personas la pueden ver y perdés el control de lo que ellas \
                                   puedan hacer con esa foto. Recordá: ¡la seguridad la hacemos entre todos!';
                        image = '../assets/'+item+'.jpg';
                        break; 
                case 'item4': 
                        titulo = 'Sexting';
                        subtitulo = '';
                        info1 = 'El sexting consiste en enviar mensajes, fotos o vídeos personales de contenido erótico y sexual a través de  \
                                 aplicaciones de mensajería instantánea, redes sociales, correos electrónicos u otro tipo de herramienta de comunicación. \
                                 Los mensajes, imágenes y vídeos son creados conscientemente por sus protagonistas y enviados inicialmente por ellos mismos a \
                                 otras personas. Habitualmente se suele realizar de manera íntima, entre dos personas, aunque pueda llegar a manos de muchos otros usuarios \
                                 si no se respeta esa intimidad.';
                        info2 = 'Para prevenir el sexting se debe concientizar y promover el cuidado de la privacidad, \
                                 no fomentar el sexting ni participar en su difusión, concienciar a los menores de la peligrosidad del sexting, \
                                 tanto como protagonistas de los contenidos como receptores de éstos, \
                                 desarrollar la autoestima y las habilidades sociales, configurar correctamente los dispositivos y aplicaciones para evitar \
                                 perder el control de la información que guardan.';
                        caption = 'Es posible que el envío de este tipo de contenidos sea involuntario, ya que otra persona puede utilizar el dispositivo en el \
                                   que están almacenados los archivos y reenviarlos, o que la víctima sea grabada sin su consentimiento.' ;
                        image = '../assets/'+item+'.jpg';
                        break;   
            }
        
    }else{
           titulo = 'Ciberseguridad Social';
            subtitulo = '';
            info1 = '';
            info2 = '';
            caption = 'No tenemos Información para mostrar' ;
            image = '';


    }
    document.getElementById('titulo').innerHTML = titulo;
    document.getElementById('subtitulo').innerHTML = subtitulo;
    document.getElementById('info1').innerHTML = info1;
    document.getElementById('info2').innerHTML = info2;
    document.getElementById('caption').innerHTML = caption;
    document.getElementById('imagen').src = image;    
    
  }
  
