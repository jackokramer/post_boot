from django.contrib import admin

from .models import Question, Choice

admin.site.site_header = "pollster admin"
admin.site.site_title = 'pollster admin area'
admin.site.index_title = ' Welcome to the pollster admin area'


class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 3
# Register your models here.


class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [(None, {'fields': ['question_text']}),
        ('Date Information', {'fields': ['pub_date'], 'classes':['collapse']}), ]
    inlines = [ChoiceInline]

#admin.site.regeister(Question)
#admin.site.register(Choice)
admin.site.register(Question, QuestionAdmin)