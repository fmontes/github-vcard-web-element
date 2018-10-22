import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-github-vcard',
    templateUrl: './github-vcard.component.html',
    styleUrls: ['./github-vcard.component.scss']
})
export class GithubVcardComponent implements OnInit {
    @Input()
    user: string;

    data$: Observable<GithubUser>;

    constructor(private httpClient: HttpClient) {}

    ngOnInit() {
        this.data$ = this.httpClient.get<GithubUser>(`https://api.github.com/users/${this.user}`);
    }
}

export interface GithubUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company?: any;
    blog: string;
    location: string;
    email?: any;
    hireable: boolean;
    bio: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
}
