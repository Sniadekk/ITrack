package com.project.itrack.Item;

import com.project.itrack.Category.Category;
import com.project.itrack.Category.CategoryRepository;
import org.springframework.stereotype.Service;

@Service
public class ItemService {
    private ItemRepository itemRepository;
    private CategoryRepository categoryRepository;

    public Iterable<Item> getAllItems(Long id){
        return itemRepository.findItemsByItemCategoryId(id);
    }

    public void addItem(Item item, Long id){
        Category itemCategory = categoryRepository.findOne(id);
        item.setItemCategory(itemCategory);
        itemRepository.save(item);
    }

    public void deleteItem(Long id){
        Item item = itemRepository.findOne(id);
        itemRepository.delete(item);
    }

}
