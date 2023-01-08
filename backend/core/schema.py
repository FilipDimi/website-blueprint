import graphene
from core.types import BarCategoryType, BarSubCategoryType, BeverageType
from core.models import BarCategory, BarSubCategory, Beverage


class Query(graphene.ObjectType):
    all_barcategories = graphene.List(BarCategoryType)
    all_barsubcategories = graphene.List(BarSubCategoryType)
    barsubcategories_by_category = graphene.List(BarSubCategoryType, name=graphene.String(required=True))
    beverages_by_category = graphene.List(BeverageType, name=graphene.String(required=True))
    beverages_by_subcategory = graphene.List(BeverageType, name=graphene.String(required=True))

    # Categories
    def resolve_all_barcategories(root, info):
        return BarCategory.objects.all()

    def resolve_all_barsubcategories(root, info):
        return BarSubCategory.objects.all()

    def resolve_barsubcategories_by_category(root, info, name):
        return BarSubCategory.objects.filter(category__name=name)

    # Beverages
    def resolve_beverages_by_category(root, info, name):
        return Beverage.objects.filter(category__name=name)

    def resolve_beverages_by_subcategory(root, info, name):
        return Beverage.objects.filter(subCategory__name=name)

class Mutation(graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)