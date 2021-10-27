---
title: Contatti
hide_title: false
sections:
  - section_id: location_map
    type: section_map
    content: >-
      Ciao! Grazie per l'interesse nel nostro lavoro. Per favore compila il modulo sotto per entrare in contatto con noi.
  - section_id: contact-form
    type: section_dynamic_form
    form_id: contacts
    form_fields:
      - input_type: text
        name: name
        label: Nome
        default_value: Il tuo nome
        is_required: true
      - input_type: email
        name: email
        label: Email
        default_value: il.tuo.indirizzo@email.it
        is_required: true
      - input_type: select
        name: subject
        label: Argomento
        options:
          - Informazioni
          - Lavori
          - Candidatura spontanea
      - input_type: textarea
        name: message
        label: Messaggio
        default_value: Il tuo messaggio.
      - input_type: checkbox
        name: consent
        label: >-
          Sono al corrente che questo sito salverà le mie informazioni con lo scopo di ricontattarmi.
      - input_type: recaptcha
    submit_label: Invia
template: advanced
---
