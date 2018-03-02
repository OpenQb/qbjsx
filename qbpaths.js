function QbPaths()
{
    this.i_qbpaths = Qt.createQmlObject('import Qb.Core 1.0; QbPaths {}',
                                        null,
                                        "QbPathsJS");;
}

QbPaths.prototype.documents = function() {
    return this.i_paths.documents();
};
