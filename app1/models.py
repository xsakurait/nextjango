from django.db import models

# Create your models here.

from django.db import models

class Work(models.Model):
    title=models.CharField(max_length=200)
    description=models.TextField()
    url=models.URLField()
    # 作成日を自動追加
    create_at=models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title