function QbPaths(parent)
{
    this.i_qbpaths = Qt.createQmlObject("import Qb.Core 1.0; QbPaths {}",
                                        parent,
                                        "QbPathsJS");;
}

QbPaths.prototype.documents = function() {
    return this.i_qbpaths.documents();
};

QbPaths.prototype.download = function() {
    return this.i_qbpaths.download();
};

QbPaths.prototype.qbdocuments = function() {
    return this.i_qbpaths.qbdocuments();
};

QbPaths.prototype.qbdownload = function() {
    return this.i_qbpaths.qbdownload();
};

QbPaths.prototype.qbapps = function() {
    return this.i_qbpaths.qbapps();
};

QbPaths.prototype.qbbackground = function() {
    return this.i_qbpaths.qbbackground();
};

QbPaths.prototype.qblogo = function() {
    return this.i_qbpaths.qblogo();
};

QbPaths.prototype.home = function() {
    return this.i_qbpaths.home();
};

QbPaths.prototype.fontAwesome = function() {
    return this.i_qbpaths.fontAwesome();
};

QbPaths.prototype.materialFont = function() {
    return this.i_qbpaths.materialFont();
};
