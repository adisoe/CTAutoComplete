CTAutoComplete
=========================

Copy folder to root project or under mysite/code folder.<br>
Dont forget to dev/build?flush=1<br>

example use:
new CTAutoCompleteField(
  $name='Category', 
  $title='Label', 
  $value='your default value', 
  $maxLength=null, $form=null, 
  $sourceClass='CategoryData', 
  $sourceField='Title', 
  $sourceFilter=null, 
  $hiddenTitle='CategoryID'
);

Important:<br>
javascript will automatically create input field type hidden based on $hiddenTitle.<br/>
So Category & CategoryID will be saved into database if form submitted.

Credit : https://github.com/tractorcow/silverstripe-autocomplete
