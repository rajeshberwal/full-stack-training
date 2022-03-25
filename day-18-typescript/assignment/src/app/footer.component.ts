import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    template: `
        <footer class="container">
            <p class="float-end"><a href="#">Back to top</a></p>
            <p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
        </footer>
    `
})
export class FooterComp {
    
}