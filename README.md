docker_drawio
=============

This role allows you to deploy Diagrams.net (ex Draw.io) docker based on [jgraph Draw.io docker image](https://hub.docker.com/r/jgraph/drawio) and [jgraph Draw.io export server docker image](https://hub.docker.com/r/jgraph/export-server).
The main repo for this role is on [Le Filament GitLab](https://sources.le-filament.com/lefilament/ansible-roles/docker_server.git)

Requirements
------------

None.

Role Variables
--------------

Only one variable needed for this role:
* drawio_url: URL to access Draw.io

Dependencies
------------

This role requires the following Ansible collection :
* community.docker

This Docker role supposes that Traefik is deployed as an inverseproxy in front of the deployed Dockers.
The following role is used by Le Filament for deploying Traefik : docker_server (https://sources.le-filament.com/lefilament/ansible-roles/docker_server)

Example Playbook
----------------

Including an example of how to use your role (for instance, with variables passed in as parameters) is always nice for users too:

    - hosts: servers
      roles:
         - { role: docker_drawio, drawio_url: "drawio.example.org" }

License
-------

AGPL-3

Author Information
------------------

Le Filament (https://le-filament.com)
