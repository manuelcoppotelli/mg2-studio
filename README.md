# mg2Studio - Studio Tecnico e di Architettura

## Configuration

The following configuration have to ve done via the Netlify UI

### Environment variables

On the Site's Settings page, click `Build & deploy`, then `Environment` then configure the following values:

- Key: `AWS_LAMBDA_JS_RUNTIME`

  Value: `nodejs14.x`

- Key: `GATSBY_APP_GOOGLE_MAPS_STATIC_API_KEY`

  Value: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

- Key: `GATSBY_APP_SITE_RECAPTCHA_KEY`

  Value: `yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy`

- Key: `SITE_RECAPTCHA_SECRET`

  Value: `zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz`



### Form notifications

On the Site's Settings page, click `Forms`, then `Form notifications` then add a new `Email notification` to your email address

### Email templates

On the Site's Settings page, click `Identity`, then `Emails` then configure the following values:

#### Invitation template

Subject: `Sei stato invitato a registrarti a mg2studio.it`

Path to template: `.netlify/identity/invitation.html`

### Confirmation template

Subject: `Verifica la tua email per mg2studio.it`
Path to template: `.netlify/identity/confirmation.html`

### Recovery template

Subject: `Cambia la tua password per mg2studio.it`

Path to template: `.netlify/identity/recovery.html`

### Email change template

Subject: `Verifica la tua nuova email per mg2studio.it`

Path to template: `.netlify/identity/email-change.html`
