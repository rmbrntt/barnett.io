from django.db import models
from django.template.defaultfilters import slugify
# Create your models here.


class Tag(models.Model):

    name = models.CharField(max_length=60)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name


class Article(models.Model):

    title = models.CharField(max_length=60)
    content = models.TextField()
    slug = models.SlugField(unique=True, editable=False)
    pub_date = models.DateTimeField(auto_now_add=True)
    tags = models.ManyToManyField(Tag, related_name="articles")

    def save(self, *args, **kwargs):
        if self.id is None:
            self.slug = slugify(self.title)
        super(Article, self).save(*args, **kwargs)

    def __str__(self):
        return self.title


