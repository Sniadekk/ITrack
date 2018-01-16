package com.project.itrack.Item;

import com.project.itrack.Category.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/category/{categoryId}/item")
public class ItemController {
    private ItemRepository itemRepository;

    ItemController(){

    }

    @Autowired
    ItemController(ItemRepository itemRepository){
        this.itemRepository = itemRepository;
    }


    @RequestMapping(path="/")
    public Iterable<Item> getAllItems(@PathVariable(value="categoryId") Long id){
        return itemRepository.findItemsByItemCategoryId(id);
    }

    @RequestMapping(path="/", method = RequestMethod.POST)
    public void addItem(@RequestBody Item item,@PathVariable("categoryId") Long id){
        itemRepository.save(item);
    }

}
