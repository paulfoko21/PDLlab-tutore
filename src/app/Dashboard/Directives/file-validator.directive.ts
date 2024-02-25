import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFileValidator]',
  standalone: true,
})
export class FileValidatorDirective {
  @Input('appFileValidator') acceptedExtensions: string[] = [];

  constructor(private el: ElementRef) {}

  @HostListener('change') onChange() {
    const files = this.el.nativeElement.files;
    console.log(files)
    if (files.length > 0) {
      const selectedFile = files[0];
      const fileName = selectedFile.name.toLowerCase();
      const validExtension = this.acceptedExtensions.some(ext => fileName.endsWith(ext.toLowerCase()));

      if (!validExtension) {
        alert('Veuillez sélectionner un fichier avec une extension valide.');
        console.log('Veuillez sélectionner un fichier avec une extension valide.')
        // Réinitialiser l'input si le fichier n'est pas valide
        this.el.nativeElement.value = '';
      }
    }
  }
}