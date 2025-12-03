from django.db import models

from wagtail.models import Page
from wagtail.fields import StreamField, RichTextField
from wagtail import blocks
from wagtail.admin.panels import FieldPanel, MultiFieldPanel
from wagtail.api import APIField
from wagtail.contrib.settings.models import BaseSiteSetting, register_setting
from wagtail.images.blocks import ImageChooserBlock


class HomePage(Page):
    pass


class BlogIndexPage(Page):
    intro = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('intro'),
    ]

    api_fields = [
        APIField('intro'),
    ]

    def get_context(self, request):
        context = super().get_context(request)
        blogpages = self.get_children().live().order_by('-first_published_at')
        context['blogpages'] = blogpages
        return context


class BlogPage(Page):
    date = models.DateField("Post date")
    intro = models.CharField(max_length=250)
    body = StreamField([
        ('heading', blocks.CharBlock()),
        ('paragraph', blocks.RichTextBlock()),
        ('image', ImageChooserBlock()),
    ], use_json_field=True)
    
    feed_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    content_panels = Page.content_panels + [
        FieldPanel('date'),
        FieldPanel('intro'),
        FieldPanel('body'),
        FieldPanel('feed_image'),
    ]

    api_fields = [
        APIField('date'),
        APIField('intro'),
        APIField('body'),
        APIField('feed_image'),
    ]


@register_setting
class SiteSettings(BaseSiteSetting):
    site_name = models.CharField(max_length=255, default='Abdul Wajid CK')
    site_description = models.TextField(blank=True)
    contact_email = models.EmailField(blank=True)
    contact_phone = models.CharField(max_length=50, blank=True)
    linkedin_url = models.URLField(blank=True)
    instagram_url = models.URLField(blank=True)
    stakque_url = models.URLField(blank=True, default='https://stakque.com')

    panels = [
        FieldPanel('site_name'),
        FieldPanel('site_description'),
        MultiFieldPanel([
            FieldPanel('contact_email'),
            FieldPanel('contact_phone'),
        ], heading="Contact Info"),
        MultiFieldPanel([
            FieldPanel('linkedin_url'),
            FieldPanel('instagram_url'),
            FieldPanel('stakque_url'),
        ], heading="Social Links"),
    ]
