with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "node";
    buildInputs = [
        nodejs
        python311Packages.flask

    ];
    shellHook = ''
    export PATH="$PWD/node_modules/.bin/:$PATH"
    '';
}
