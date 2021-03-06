"""
Page textarea of dazzler
Created 2019-07-07
"""
from dazzler.components import core
from dazzler.system import Page, Trigger, BindingContext

page = Page(
    __name__,
    core.Container([
        core.TextArea(identity='textarea'),
        core.Container(identity='output'),
        core.TextArea(identity='autosizer', autosize=True),
    ])
)


@page.bind(Trigger('textarea', 'value'))
async def on_text(ctx: BindingContext):
    await ctx.set_aspect('output', children=ctx.trigger.value)
