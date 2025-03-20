using { poccicd101 as my } from '../db/schema.cds';

@path : '/service/poccicd101Service'
service poccicd101Service
{
    entity User as projection on my.User;
}

// annotate poccicd101Service with @requires :
// [
//     'authenticated-user'
// ];
