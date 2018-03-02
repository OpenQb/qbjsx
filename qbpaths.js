function QbPaths(parent)
{
    this.i_qbpaths = Qt.createQmlObject('import Qb.Core 1.0; QbPaths {}',
                                        parent,
                                        "QbPathsJS");;
}

QbPaths.prototype.documents = function() {
    return this.i_qbpaths.documents();
};
