simpleRotation jQuery Plugin
==

Otro plugin para crear rotaciones.

Para usar: Incluye el plugin en tu proyecto y llama a `$('selector').simpleRotation();` :)

### Uso:

Incluye jquery.simpleRotation.js en el header o footer (o en un archivo de plugins conjunto).

Si estas en versión de producción recomiendo ocupar jquery.simpleRotation.min.js.

#### HTML
Esto es un ejemplo, se puede ocupar cualquier estructura `contenedor > hijo`
```html
<ul class="rotation">
  <li>Lista 1</li>
  <li>Lista 2</li>
  <li>Lista 3</li>
</ul>
```

#### CSS
```css
.rotation { position: relative; }
.rotation li { position: absolute; }
```

#### JavaScript
```js
$(function(){
  
  // Simple
  $('.rotation').simpleRotation();
  
  // Con opciones
  $('.rotation').simpleRotation({
    'timeTransition'  : 20000 // trasición más larga (20 segundos)
  });
  
});
```

### Opciones:

```js
$('selector').simpleRotation({
  // Tiempo de la transición de un elemento a otro
  'timeTransition'  : 10000,
  // Velocidad de la transición 
  'speedTransition' : 900
  
});
```

### ToDo's

* Aplicar css en el script

### Changelog:

__0.1.0 / 2012-01-08__
* First release

