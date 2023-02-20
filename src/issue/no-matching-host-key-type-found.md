# No matching host key type found
[toc]

## 问题

```
Unable to negotiate with 10.1.105.172 port 7999: no matching host key type found. Their offer: ssh-rsa
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

```
Cloning into 'dyson-link-mp'...
The authenticity of host '[stash.dyson.global.corp]:7999 ([10.1.105.172]:7999)' can't be established.
RSA key fingerprint is SHA256:AN7EAKjE+LRMVbqypVifrMY2BwwX2vPoZV6yaMomUsI.
This key is not known by any other names
```

## 解决方案
### Upgrade ssh key to Ed25519
[Upgrade Your SSH Key to Ed25519](https://medium.com/risan/upgrade-your-ssh-key-to-ed25519-c6e8d60d3c54)

### Configure ssh
[sshd_config - How to Configure the OpenSSH Server?](https://www.ssh.com/academy/ssh/sshd_config)

.ssh/config
```
Host *
PubkeyAcceptedKeyTypes +ssh-rsa
HostKeyAlgorithms +ssh-rsa
```