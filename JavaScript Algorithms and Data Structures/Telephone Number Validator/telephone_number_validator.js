function telephoneCheck(str) {
    return /^(1\s|1)?(\([0-9]{3}\)|([0-9]){3})(-|\s)?([0-9]){3}(-|\s)?([0-9]){4}$/.test(str);
}