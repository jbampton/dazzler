from dazzler.components import core
from dazzler.system import Page

page = Page(
    __name__,
    core.Container('Initial', identity='content'),
    url='/',
    header='<div id="injected">Static</div>'
)
